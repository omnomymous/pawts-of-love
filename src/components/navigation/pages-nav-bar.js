import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const PagesNavBar = (props) => {
    return(
        
        <div className="page-nav-wrapper">

                        
                <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="active-page" >Home </NavLink>
                </div>
                    
                <div className="nav-link-wrapper">
                        <NavLink to="/Dogs" activeClassName="active-page">Dogs </NavLink>
                </div>
                    
                <div className="nav-link-wrapper">
                        <NavLink to="/Cats" activeClassName="active-page">Cats </NavLink>
                </div>
                
            
        </div>

                

        
    )
}

export default withRouter(PagesNavBar);