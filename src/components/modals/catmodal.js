import React, { Component } from 'react';
import ReactModal from 'react-modal';

import CatForm from '../forms/new-cat'

ReactModal.setAppElement(".app-wrapper")

export default class CatModal extends Component {
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


        this.handleCatSubmit = this.handleCatSubmit.bind(this)
            
    
    }

    
    handleCatSubmit(cat) {
        this.props.handleNewCatSubmit(cat)
    
    }

    render() {
        return(
            <ReactModal
            style={this.customStyles} 
            onRequestClose={() => {this.props.handleCatModalClose()}} 
            isOpen={this.props.catModalIsOpen}
            >

            <CatForm handleCatSubmit={this.handleCatSubmit}/>
            </ReactModal >
        )
    }
}