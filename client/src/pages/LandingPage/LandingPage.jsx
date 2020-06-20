import React from 'react';
import './LandingPage.css';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import Footer from '../../components/Footer/Footer';
import {Grid,Card,Image,Transition} from 'semantic-ui-react';
import { Component } from 'react';

export default class  LandingPage extends Component {

    state = {

        englishDescription : "I am a Seeker of truthful History; so, I look for that in the wider spectrum  and more"+ 
        "in the unscripted annals of history, not just in the "+ 
        "scripted history written by special interest groups.",
         malayalamDescription : "ഞാൻ സത്യമായ ചരിത്രം അന്വേഷിക്കുന്ന ചരിത്രാന്വേഷി. അതിനായി, ചിലർ സ്വന്തം കാര്യസാദ്ധ്യത്തിനായി,"+ 
        " ചരിത്രം നിർമ്മിക്കാൻ വേണ്ടി എഴുതിയ ചരിത്രത്തേക്കാൾ കൂടുതലായി, ചരിത്രവ്യക്തിത്വങ്ങളുടെ സ്വകാര്യ ലിഖിതങ്ങളിൽ തേടുന്നു.",
        open: false

    }

    componentDidMount(){
        this.setState({open: true})
    }


    render(){

    
        return(
            <Grid stackable padded = {"vertically"} className = "landingPageGrid">
                <SiteHeader></SiteHeader>
                <Grid.Row className = "landingPageMainRow">
                    <Grid.Column verticalAlign = {"middle"} width = {4} only = {"computer"}>
                        <Transition
                            animation = "fade right"
                            duration = {1000}
                            visible = {this.state.open}
                        >
                            <Card centered className = "landingPageCard">
                                <Image src= {require('./assets/Udayabhanu.jpg')} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header textAlign = {"center"}>Udayabhanu Panickar</Card.Header>
                                    <Card.Meta textAlign = {"center"}>Author</Card.Meta>
                                    <Card.Description textAlign = {"center"}>
                                        {this.state.englishDescription}
                                    <br></br>
                                    <br></br>
                                        {this.state.malayalamDescription}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Transition>
                    </Grid.Column>
                    <Grid.Column verticalAlign = {"middle"} width = {16} only = {"tablet mobile"}>
                        <Transition
                            animation = "fade right"
                            duration = {1000}
                            visible = {this.state.open}
                        >
                            <Card centered className = "landingPageCard">
                                <Image src= {require('./assets/Udayabhanu.jpg')} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header textAlign = {"center"}>Udayabhanu Panickar</Card.Header>
                                    <Card.Meta textAlign = {"center"}>Author</Card.Meta>
                                    <Card.Description textAlign = {"center"}>
                                        {this.state.englishDescription}
                                    <br></br>
                                    <br></br>
                                        {this.state.malayalamDescription}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Transition>
                    </Grid.Column>
                </Grid.Row>
                <Footer></Footer>
        </Grid>
        )

    }
}
