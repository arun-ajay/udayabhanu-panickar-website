import React from 'react'
import './LandingPage.css'
import Header from '../../components/Header/Header'
import {Grid,Card,Image,Button} from 'semantic-ui-react'

function LandingPage() {

    var englishDescription = "I am a Seeker of truthful History; so, I look for that in the wider spectrum  and more"+ 
    "in the unscripted annals of history, not just in the "+ 
    "scripted history written by special interest groups."

    var malayalamDescription = "ഞാൻ സത്യമായ ചരിത്രം അന്വേഷിക്കുന്ന ചരിത്രാന്വേഷി. അതിനായി, ചിലർ സ്വന്തം കാര്യസാദ്ധ്യത്തിനായി,"+ 
    " ചരിത്രം നിർമ്മിക്കാൻ വേണ്ടി എഴുതിയ ചരിത്രത്തേക്കാൾ കൂടുതലായി, ചരിത്രവ്യക്തിത്വങ്ങളുടെ സ്വകാര്യ ലിഖിതങ്ങളിൽ തേടുന്നു."

    return(
        <Grid padded = {"vertically"} className = "landingPageGrid">
            <Header></Header>
            <Grid.Row className = "landingPageMainRow">
                <Grid.Column width = {4} className = "landingPageColumn">
                    <Card centered className = "landingPageCardContent">
                        <Image src= {require('./assets/Udayabhanu.jpg')} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header textAlign = {"center"}>Udayabhanu Panickar</Card.Header>
                            <Card.Meta textAlign = {"center"}>Author</Card.Meta>
                            <Card.Description >
                                {englishDescription}
                            <br></br>
                                {malayalamDescription}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row className = "landingPageFooter">
                <Grid.Column width = {16}>
                </Grid.Column>
            </Grid.Row>
    </Grid>
    )
}

export default LandingPage;