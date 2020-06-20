import React from 'react';
import './Writing.css';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import Footer from '../../components/Footer/Footer';
import {Grid,Card} from 'semantic-ui-react';
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
                <Grid.Column verticalAlign = {"middle"} width = {16}>
                    <Card className = "writingPageCard">
                        <Card.Header>
                            {props.location.state["header"]}
                        </Card.Header>
                        <Card.Description>
                            {props.location.state["description"]}
                        </Card.Description>
                    </Card>
                </Grid.Column>
                
            </Grid.Row>
            <Footer></Footer>
        </Grid>
    )
}

export default Writing;