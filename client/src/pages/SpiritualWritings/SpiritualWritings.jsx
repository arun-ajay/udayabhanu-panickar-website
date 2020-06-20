import React,{Component} from 'react';
import './SpiritualWritings.css';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import Footer from '../../components/Footer/Footer';
import {Grid,Card,Icon,Transition} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';



export default class SpiritualWritings extends Component{

    state = {
        open : false,
        redirectWriting: false,
        redirectSubmitter: false,
        data: null
    }

    componentDidMount(){
        this.setState({
            open: true
            }
        )
    }

    redirectToWriting = (data) => {
        this.setState({
            redirectWriting: true,
            data: data
        })
    }

    redirectToSubmitter = () =>{
        this.setState({
            redirectSubmitter:true
        })
    }


    render () {
        var articles = Array(15).fill({
            header: "Article",
            meta : "Date",
            description : "Quick Summary",
            content: "This is the actual content"
        })

        var auth = true;
    
        var cardArray = articles.map((data,index) => {
           return  <Transition
                animation = "vertical flip"
                duration = {500+(index)*100}
                visible = {this.state.open}
            >
                <Card link color = {"blue"} onClick = {() => this.redirectToWriting(data)}>
                    <Card.Content textAlign = {"center"}>
                        <Card.Header>
                            {data.header + " " + index}
                        </Card.Header>
                        <Card.Meta>
                            {data.meta + " " + index}
                        </Card.Meta>
                        <Card.Description>
                            {data.description + " " + index}
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Transition>
        })

        if (auth){
            cardArray.unshift(
                <Card link color = {"green"} onClick = {() => this.redirectToSubmitter()}>
                    <Card.Content textAlign = {"center"}>
                        <Card.Header >
                            Submit a New Writing
                        </Card.Header>
                    </Card.Content>
                    <Card.Content textAlign = {"center"} extra>
                            <Icon.Group size = {"big"}>
                                <Icon color = {"green"} name = {"pencil alternate"} />
                                <Icon color = {"green"} corner = {"bottom right"} name = {"plus"}/>
                            </Icon.Group>
                    </Card.Content>
                </Card>
            )
        }

        if (this.state.redirectWriting){
            return <Redirect to={{
                pathname: "/spiritualwritings/writing",
                state: this.state.data
            }}
            />
        }

        if (this.state.redirectSubmitter){
            return <Redirect to={{
                pathname: "/spiritualwritings/submitter",
                state: {
                    type: "spiritual"
                }
            }}
            />
        }
    
        return(
            <Grid stackable padded = {"vertically"} className = "spiritualPageGrid">
                <SiteHeader></SiteHeader>
                <div className = "spiritualPageMainRow">
                    <Card.Group stackable itemsPerRow = {6}>
                        {cardArray}
                    </Card.Group>
                </div>
                <Footer></Footer>
            </Grid>
        )
    }
}