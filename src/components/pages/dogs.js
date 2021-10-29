import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDog} from "@fortawesome/free-solid-svg-icons";

import PagesNavBar from "../navigation/pages-nav-bar"
import Dog from "../containers/dog-records"
import DogModal from '../modals/dogmodal';
import axios from 'axios';

library.add(faDog)

export default class DogContainer extends Component {
    constructor(props) {
        super(props); 
        

        this.state = {
            dogsList: [],
            dogModalIsOpen: false
        }

        this.getDogsList = this.getDogsList.bind(this)
        
        this.addNewDog = this.addNewDog.bind(this)
        this.handleDogModalClose = this.handleDogModalClose.bind(this)
        this.handleNewDogSubmit = this.handleNewDogSubmit.bind(this)
    }

    handleNewDogSubmit(dog) {
        this.setState({
            dogModalIsOpen: false,
            dogsList:[dog].concat(this.state.dogsList)

        })

    }

    getDogsList(){
        axios.get("https://pawts-of-love-api.herokuapp.com/dogs")
        .then(response => {            
            this.setState({
                dogsList: response.data
            })

        }).catch(error => {
            console.log("dogsList error", error)
        })
    }

   

    addNewDog() {
        this.setState ({
            dogModalIsOpen: true
        })
    }

    handleDogModalClose() {
        this.setState({
            dogModalIsOpen: false
        })
    }

    componentWillMount() {
        this.getDogsList();
    }

    render() {
        const dogRecords = this.state.dogsList.map(dogs => {
          return <Dog key={dogs.id} dogs={dogs} />
        })
        return(
            <div className="container">
                <div>
                    <PagesNavBar />
                </div>

                <DogModal
                handleNewDogSubmit = {this.handleNewDogSubmit}
                handleDogModalClose = {this.handleDogModalClose} 
                dogModalIsOpen = {this.state.dogModalIsOpen} />

                <div className="dog-modal-link">
                    <a onClick={this.addNewDog}>
                        <FontAwesomeIcon icon="dog" />
                    </a>
                </div>
                <div className="dogs-list-wrapper">
                {dogRecords}
                </div>
            </div>
        )
    }
}