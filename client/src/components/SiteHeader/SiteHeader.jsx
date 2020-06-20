import React,{Component} from 'react';
import './SiteHeader.css';
import  {Grid,Button} from 'semantic-ui-react';
import {Icon,Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom'



export default class SiteHeader extends Component {
    state = {
        data : [
            {
                type: "SiteHeader",
                value: "Guest",
                display: "Guest",
            },
            {
                type: "navigation",
                value: "Home",
                display: <Icon name = {"home"}/>,
                link: "/"
            },
            {
                type: "navigation",
                value:"Spiritual Writings",
                display: "Spiritual Writings",
                link: "/spiritualwritings"
            },
            {
                type: "navigation",
                value:"Historical Writings",
                display: "Historical Writings",
                link: "/historicalwritings"
            }
            ],
        activeItem: window.location.pathname
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
                    as = {Link}
                    to = {info.link}
                    name = {info.value}
                    color = {"blue"}
                    active = {this.state.activeItem === info.link}
                    onClick = {this.handleItemClick}>
                        {info.display}
                    </Menu.Item>

            }
            else if (info.type === "SiteHeader"){
                return <Menu.Item SiteHeader>
                            {info.value}
                        </Menu.Item>
            }
        })        
    return(
        <Grid.Row columns = {3} className = "siteHeader">
            <Grid.Column computer = {4} tablet = {16} mobile = {16}/>
            <Grid.Column textAlign = {"center"} verticalAlign = {"middle"} computer  = {8} tablet = {16} mobile = {16}>
                <Menu stackable borderless compact inverted>
                    {tabsArray}
                </Menu>
            </Grid.Column>    
            <Grid.Column textAlign = {"right"} verticalAlign = {"middle"} only  = {"computer"} computer = {4} style = {{right: "10px"}}>
                    <Button.Group compact>
                        <Button animated = "fade" onClick = {this.handleLogInClick} color = {"google plus"}>
                            <Button.Content visible>
                                <Icon name = {"google"}/> Google
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name = {"sign-in"}/> Sign In
                            </Button.Content>
                        </Button>
                        <Button animated = {"fade"} onClick = {this.handleLogInClick}   color = {"facebook"}>
                            <Button.Content visible>
                                <Icon name = {"facebook official"}/> Facebook
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name = {"sign-in"}/> Sign In
                            </Button.Content>
                        </Button>
                    </Button.Group>
            </Grid.Column>     
            <Grid.Column textAlign = {"center"} verticalAlign = {"middle"} only = {"tablet mobile"} tablet = {16} mobile = {16} style = {{right: "10px"}}>
                    <Button.Group compact>
                        <Button animated = "fade" onClick = {this.handleLogInClick} color = {"google plus"}>
                            <Button.Content visible>
                                <Icon name = {"google"}/> Google
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name = {"sign-in"}/> Sign In
                            </Button.Content>
                        </Button>
                        <Button animated = {"fade"} onClick = {this.handleLogInClick}   color = {"facebook"}>
                            <Button.Content visible>
                                <Icon name = {"facebook official"}/> Facebook
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name = {"sign-in"}/> Sign In
                            </Button.Content>
                        </Button>
                    </Button.Group>
            </Grid.Column>     
        </Grid.Row> 

    );

    }
}