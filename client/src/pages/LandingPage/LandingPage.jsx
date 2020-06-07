import React,{Component, cloneElement} from 'react';
import './LandingPage.css';
import  {Grid,Button} from 'semantic-ui-react';
import {Menu} from 'semantic-ui-react';



export default class LandingPage extends Component {
    state = {
        data : [
            {
                type: "header",
                value: "Guest",
            },
            {
                type: "navigation",
                value:"Home",
            },
            {
                type: "navigation",
                value:"Spiritual Writings",
            },
            {
                type: "navigation",
                value:"Historical Writings",
            }
            ],
        activeItem: "LandingPage"
    }

    handleItemClick = (e,{name}) => {
        this.setState({
            activeItem: name
        })
    }

    handleLogInClick = (e,{name}) => {
        /* TODO */
        console.log("BACKEND")
    }


    render() {

        var tabsArray = this.state.data.map((info,index) => {
            if (info.type === "navigation"){
               return <Menu.Item
                        name = {info.value} 
                        active = {this.state.activeItem === info.value}
                        onClick = {this.handleItemClick}/>
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
            // else{
            //     return <Menu.Item header>
            //         {info.value}
            //     </Menu.Item>
            // }
        })


        
    return(
        <Grid>
            <Grid.Row columns = {3}>
                <Grid.Column width = {3} style = {{border: "5px solid red"}}/>
                <Grid.Column width  = {10} style = {{border: "5px solid blue"}}>
                    <Menu compact>
                        {tabsArray}
                    </Menu>
                </Grid.Column>    
                <Grid.Column width = {3} style = {{border: "5px solid green"}}>
                    <Button>Log In</Button>
                </Grid.Column>        
            </Grid.Row> 
        </Grid>

    );

    }
}