import React from 'react';
import './Writing.css';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import Footer from '../../components/Footer/Footer';
import {Grid,Card,Transition,Image} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom'



function Writing(props){
    if (props.location.state){
        console.log(props.location.state)
    }
    else{
        console.log("Data not found!")
        return <Redirect to={{
            pathname: "/",
        }}
        />
    }

    console.log(props.location.state)
    return(
        <Grid stackable padded = {"vertically"} className = "writingPageGrid">
            <SiteHeader></SiteHeader>
            <Grid.Row className = "writingPageMainRow">
                <Grid.Column verticalAlign = {"top"} width = {16} style = {{"padding-top":"10px"}}>
                    <Card fluid centered>
                        <Card.Content>
                            <Card.Header textAlign = {"center"}>{props.location.state["header"]}</Card.Header>
                            <Card.Meta textAlign = {"center"}>{props.location.state["meta"]}</Card.Meta>
                            <Card.Description textAlign = {"center"}>
                                {props.location.state["description"]}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>
            <Footer></Footer>
        </Grid>
    )
}

export default Writing;