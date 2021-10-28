import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCat} from "@fortawesome/free-solid-svg-icons";

import Cat from '../containers/cat-records';
import axios from 'axios';
import CatModal from '../modals/catmodal';
import PagesNavBar from "../navigation/pages-nav-bar";

library.add(faCat)

export default class CatContainer extends Component {
    constructor(props) {
        super(props); 
        

        this.state = {
            catsList: [],
            catModalIsOpen: false
        }

        this.getCatsList = this.getCatsList.bind(this)
        
        this.addNewCat = this.addNewCat.bind(this)
        this.handleCatModalClose = this.handleCatModalClose.bind(this)
        this.handleNewCatSubmit = this.handleNewCatSubmit.bind(this)
    }

    handleNewCatSubmit(cat) {
        this.setState({
            catModalIsOpen: false,
            catsList:[cat].concat(this.state.catsList)

        })

    }

    getCatsList(){
        axios.get("https://pawts-of-love.herokuapp.com/cats")
        .then(response => {            
            this.setState({
                catsList: response.data
            })

        }).catch(error => {
            console.log("catsList error", error)
        })
    }

   

    addNewCat() {
        this.setState ({
            catModalIsOpen: true
        })
    }

    handleCatModalClose() {
        this.setState({
            catModalIsOpen: false
        })
    }

    componentWillMount() {
        this.getCatsList();
    }

    render() {
        const catRecords = this.state.catsList.map(cats => {
          return <Cat key={cats.id} cats={cats} />
        })
        return(
            <div className="container">
                <div>
                    <PagesNavBar />
                </div>

                <CatModal
                handleNewCatSubmit = {this.handleNewCatSubmit}
                handleCatModalClose = {this.handleCatModalClose} 
                catModalIsOpen = {this.state.catModalIsOpen} />

                <div className="cat-modal-link">
                    <a onClick={this.addNewCat}>
                        <FontAwesomeIcon icon="cat" />
                    </a>
                </div>
                <div className="cats-list-wrapper">
                {catRecords}
                </div>
            </div>
        )
    }
}