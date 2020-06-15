import React,{Component} from 'react';
import './Footer.css';
import  {Grid,Label,Icon} from 'semantic-ui-react';



export default class Footer extends Component {
    state = {}

    handleFooterLabelClick = () => {
        window.open("https://github.com/arun-ajay","_blank")
    }


    render() {

    return(
        <Grid.Row className = "footerComponentMainRow">
            <Grid.Column width = {16} textAlign = {"center"} verticalAlign = {"middle"}>
                <Label size = {"large"} circular onClick = {this.handleFooterLabelClick} as = 'a' color = {"black"}>
                    <Icon name = {"github alternate"}/>
                    Arun Ajay
                </Label>
            </Grid.Column>
        </Grid.Row>

    );

    }
}