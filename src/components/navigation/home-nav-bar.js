import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const HomeNavBar = (props) => {
    return(
        
        <div className="home-nav-wrapper">
                   
                <button className="nav-link-wrapper">
                        <NavLink to="/Dogs" activeClassName="active">Dogs </NavLink>
                </button>
                    
                <button className="nav-link-wrapper">
                        <NavLink to="/Cats" activeClassName="active">Cats </NavLink>
                </button>
                
            
        </div>

                

        
    )
}

export default withRouter(HomeNavBar);