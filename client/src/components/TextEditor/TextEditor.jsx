import React,{Component} from 'react';
import './SiteHeader.css';




export default class TextEditor extends Component {
    state = {
    }


    render() {  
    return(
        <Grid.Row columns = {3}>
            <Grid.Column textAlign = {"center"} verticalAlign = {"middle"} computer  = {8} tablet = {0} mobile = {16}>
                <Menu stackable borderless compact inverted>
                    {tabsArray}
                </Menu>
            </Grid.Column>         
        </Grid.Row> 

    );

    }