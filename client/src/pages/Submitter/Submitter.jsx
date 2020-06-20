import React from 'react';
import './Submitter.css';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import Footer from '../../components/Footer/Footer';
import {Grid} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';



function Submitter(props){
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
    return(
        <Grid padded = {"vertically"} className = "submitterPageGrid">
            <SiteHeader></SiteHeader>
            <Grid.Row className = "submitterPageMainRow">
                {props.location.state["header"]}
            </Grid.Row>
            <Footer></Footer>
        </Grid>
    )
}

export default Submitter;