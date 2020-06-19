import React from 'react';
import './Writing.css';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import Footer from '../../components/Footer/Footer';
import {Grid} from 'semantic-ui-react';



function Writing(props){

    console.log(props.location.state)
    return(
        <Grid padded = {"vertically"} className = "writingPageGrid">
            <SiteHeader></SiteHeader>
            <Grid.Row className = "writingPageMainRow">
                {props.location.state["header"]}
                
            </Grid.Row>
            <Footer></Footer>
        </Grid>
    )
}

export default Writing;