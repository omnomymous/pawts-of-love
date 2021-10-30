import React, { Component } from 'react';
import { 
    BrowserRouter as Router, Switch, Route } from "react-router-dom";


import HomeNavBar from "../navigation/home-nav-bar"


export default class Home extends Component {
    constructor() {
        super(); 
        
            

            this.handleChange = this.handleChange.bind(this)
       
        }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    

    render() {
        return(
            <div className="homepage-wrapper">

                <div className="home-text-wrapper">
                    <div className="home-header">
                        <h1>Pawts Of Love</h1>
                    </div>
                    <div className="home-sub-header">                   
                        <h3>Helping to find forever homes</h3>
                    </div>
                </div>

                
                    
                <div className="dogs-and-cats">                        
                    <HomeNavBar />                        
                </div>
                


               
            </div>
        )
    }
}