import React,{Component} from 'react';
import './Header.css';
import  {Grid,Button} from 'semantic-ui-react';
import {Icon,Menu} from 'semantic-ui-react';



export default class Header extends Component {
    state = {
        data : [
            {
                type: "header",
                value: "Guest",
                display: "Guest",
            },
            {
                type: "navigation",
                value: "Home",
                display: <Icon name = {"home"}/>
            },
            {
                type: "navigation",
                value:"Spiritual Writings",
                display: "Spiritual Writings"
            },
            {
                type: "navigation",
                value:"Historical Writings",
                display: "Historical Writings"
            }
            ],
        activeItem: "Home"
    }

    handleItemClick = (e,{name}) => {
        this.setState({
            activeItem: name
        })
    }

    handleLogInClick = () => {
        /* TODO */
        console.log("BACKEND")
    }


    render() {

        var tabsArray = this.state.data.map((info,index) => {
            if (info.type === "navigation"){
               return <Menu.Item
                        name = {info.value}
                        color = {"orange"}
                        active = {this.state.activeItem === info.value}
                        onClick = {this.handleItemClick}>
                            {info.display}
                        </Menu.Item>
            }
            else if (info.type === "header"){
                return <Menu.Item header>
                            {info.value}
                        </Menu.Item>
            }
            else if (info.type === "signin"){
                return <Menu.Item
                        name = {info.value}
                        onclick = {this.handleLogInClick}/>
            }
        })        
    return(
        <Grid.Row columns = {3} style = {{border: "5px solid green"}}>
            <Grid.Column width = {4}/>
            <Grid.Column textAlign = {"center"} width  = {8}>
                <Menu borderless compact inverted>
                    {tabsArray}
                </Menu>
            </Grid.Column>    
            <Grid.Column textAlign = {"right"} verticalAlign = {"middle"} width = {4}>
                    <Button.Group>
                        <Button animated = "fade" onClick = {this.handleLogInClick} compact color = {"google plus"}>
                            <Button.Content visible>
                                <Icon name = {"google"}/> Google
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name = {"sign-in"}/> Sign
                            </Button.Content>
                        </Button>
                        <Button animated = {"fade"} onClick = {this.handleLogInClick} compact  color = {"facebook"}>
                            <Button.Content visible>
                                <Icon name = {"facebook official"}/> Facebook
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name = {"sign-in"}/> Sign
                            </Button.Content>
                        </Button>
                    </Button.Group>
            </Grid.Column>        
        </Grid.Row> 

    );

    }
}