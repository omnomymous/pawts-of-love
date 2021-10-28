import React from "react";



const Dog = props => {
    const {
        id,
        name, 
        breed, 
        age, 
        behavior,
        shelter_name,
        contact_email,
        dog_image
    } = props.dogs;

    return (
        <div className="dog-list-wrapper"> 
            
            <iframe className="pet-image" src={dog_image}>
               
            </iframe>
            
            <div className="name">{name}</div>
            
            <div className="breed">{breed}, {age} yrs.old</div>
            <div className="shelter-name">{shelter_name}</div>
            <div className="contact-email">{contact_email}</div>
            <div className="behavior">{behavior}</div>
            
        </div>
    )

}


export default Dog;