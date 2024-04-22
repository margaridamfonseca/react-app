import React from "react";

export default function Form () {
    return(
        <div className="Form"> 
            <form className ="search-form" id="search-form">
                <input type="search" placeholder="Enter a city..." required className="form-search-box" id="form-search-box"/>
                <input type="submit" value="Search" className="form-search-button"/>
            </form>
        </div>
    );
}