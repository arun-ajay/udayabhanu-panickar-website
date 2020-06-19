import React,{Component} from 'react';
import './Footer.css';
import  {Grid,Label,Button} from 'semantic-ui-react';



export default class Footer extends Component {
    state = {}

    handleFooterLabelClick = () => {
        window.open("https://github.com/arun-ajay","_blank")
    }


    render() {

    return(
        <Grid.Row columns = {1} className = "footerComponentMainRow">
            <Grid.Column width = {16} textAlign = {"center"} verticalAlign = {"middle"}>
                <Button  labelPosition= {"left"} onClick = {this.handleFooterLabelClick}>
                    <Label circular  icon = {"github"} color = {"black"}/>
                    <Button compact circular animated = {"vertical"} color = {"black"}>
                        <Button.Content visible>
                            Arun Ajay
                        </Button.Content>
                        <Button.Content hidden>
                            Site Creator
                        </Button.Content>
                    </Button>
                </Button>
            </Grid.Column>
        </Grid.Row>

    );

    }
}