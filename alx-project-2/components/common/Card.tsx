import React from "react";
import { CardProps } from "@/interfaces";


const Card: React.FC<CardProps> = ({ title, content }) =>{
    return(
        <div>
            <p>Title: {title}</p>
            <p>Content: {content}</p>
        </div>
    )
}


export default Card;