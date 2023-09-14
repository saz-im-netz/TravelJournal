import React from "react";
import data from "./data";
import Location from "./Location";
import "./Main.css";

function Main(){
    const destinations = data.map( location => {
        return (
            <Location 
                key={location.id}
                location={location}
            />
        )
    })
    
    return (
        <main>
            <div class="destination--list">
                {destinations}
            </div>
            
        </main>
    )
}

export default Main;