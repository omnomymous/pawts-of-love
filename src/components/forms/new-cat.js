import React, { Component }  from "react";





export default class CatForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            breed: "",
            age: "",
            behavior: "",
            contact_email: "",
            shelter_name: "",
            cat_image: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    

   
    
    handleChange(event) {
        console.log("event recieved", event)
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        

        fetch("https://pawts-of-love-api.herokuapp.com/cat", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                name: this.state.name,
                breed: this.state.breed,
                age: this.state.age,
                behavior: this.state.behavior,
                contact_email: this.state.contact_email,
                shelter_name: this.state.shelter_name,
                cat_image: this.state.cat_image

            })
        })
        .then(response => {
            this.props.handleCatSubmit(response.data)

            this.setState({
                name: "",
                breed: "",
                age: "",
                behavior: "",
                contact_email: "",
                shelter_name: "",
                cat_image: ""
            })
        }).catch(error => {
            console.log("cat submission error", error)
        });


        
        event.preventDefault();
    }


    render() {
        return(
            <form onSubmit={this.handleSubmit} > 
                <div className="pet-form-wrapper">
               <div className="left-side">
                <input 
                type="text"
                name="name"
                placeholder="Cat Name"
                onChange={this.handleChange}
                value={this.state.name}
                />

                <input 
                type="text"
                name="breed"
                placeholder="Cat Breed(s)"
                onChange={this.handleChange}
                value={this.state.breed}
                />
                

                
                <input 
                type="number"
                name="age"
                placeholder="Suspected Age"
                onChange={this.handleChange}
                value={this.state.age}
                />
                </div>

                <div className="right-side">
                <input 
                type="email"
                name="contact_email"
                placeholder="Contact Email Adress"
                onChange={this.handleChange}
                value={this.state.contact_email}
                />
                

                
                <input 
                type="text"
                name="shelter_name"
                placeholder="Shelter Name"
                onChange={this.handleChange}
                value={this.state.shelter_name}
                />

                <input 
                type="text"
                name="cat_image"
                placeholder="Image URL"
                onChange={this.handleChange}
                value={this.state.cat_image}
                />
                </div>

                </div>


                <div className="text-area-wrapper">
                <textarea               
                type="text"
                name="behavior"
                placeholder="Describe Behavior"
                onChange={this.handleChange}
                value={this.state.behavior}
                />
                </div>
                
                
                


                <button className="btn">SAVE</button>
                
            </form>
        )
    }
}