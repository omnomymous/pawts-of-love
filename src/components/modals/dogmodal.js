import React, { Component } from 'react';
import ReactModal from 'react-modal';

import DogForm from '../forms/new-dog'

ReactModal.setAppElement(".app-wrapper")

export default class DogModal extends Component {
    constructor(props) {
        super(props);

        this.customStyles = {
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                width: "800px"
            },
            overlay: {
                backgroundColor: "rgba(1, 1, 1, 0.85)"
            }
        };


        this.handleDogSubmit = this.handleDogSubmit.bind(this)
            
    
    }

    
    handleDogSubmit(dog) {
        this.props.handleNewDogSubmit(dog)
    
    }

    render() {
        return(
            <ReactModal
            style={this.customStyles} 
            onRequestClose={() => {this.props.handleDogModalClose()}} 
            isOpen={this.props.dogModalIsOpen}>

            <DogForm handleDogSubmit={this.handleDogSubmit}/>
            </ReactModal >
        )
    }
}