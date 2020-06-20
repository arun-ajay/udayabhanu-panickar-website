import React from 'react';
import './HistoricalWritings.css';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import Footer from '../../components/Footer/Footer';
import {Grid} from 'semantic-ui-react';



function HistoricalWritings(){



    return(
        <Grid stackable padded = {"vertically"} className = "historicalPageGrid">
            <SiteHeader></SiteHeader>
            <Grid.Row className = "historicalPageMainRow">
            </Grid.Row>
            <Footer></Footer>
        </Grid>
    )
}

export default HistoricalWritings;