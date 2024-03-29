import React from "react";
import "./Location.css";

function Location(props){
    return (
        <div class="location--container">
            <div class="location--image" style={{
                backgroundImage: `url(${props.location.imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
            </div>
            <div class="location--card">
                <div class="location--maps"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002ZM3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0Z" fill="#1B2847"/>
                    </svg>
                    <h4 class="location--country">{props.location.location}</h4>
                    <a href={props.location.googleMapsUrl} target="_blank" rel="noreferrer" class="location--link">View on Google Maps</a>
                </div>
                <h1 class="location--title">{props.location.title}</h1>
                <h2 class="location--date">{props.location.startDate} - {props.location.endDate}</h2>
                <p class="location--descr">{props.location.description}</p>
            </div>
            
        </div>
    )
}

export default Location;