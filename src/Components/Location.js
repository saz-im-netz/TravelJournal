import React from "react"
import data from "./data"

export default function Location(){
    return (
        <div class="location-container">
            <img src={data[0].imageUrl} />
            <h1>{data[0].title}</h1>
        </div>
    )
}