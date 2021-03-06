import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            logged_in: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit(event) {
        axios.post("https://pawts-of-love.herokuapp.com/user")


        event.preventDefault
    }

    render() {
        return (
            <div>
                <h1>LOGIN TO ADD PETS</h1>

                <form onSubmit={this.handleSubmit}>
                <input 
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                />

                <input 
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                />

                <div>
                    <button className="btn" type="submit">LOGIN</button>
                </div>
                
                </form>                 
            </div>
        );
    }
}