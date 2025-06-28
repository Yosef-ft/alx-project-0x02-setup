import React from "react";
import { CardProps } from "@/interfaces";


const Card: React.FC<CardProps> = ({ userId, title, content }) =>{
    return(
        <div>
            <p>ID: {userId} </p>
            <p>Title: {title}</p>
            <p>Content: {content}</p>
        </div>
    )
}


export default Card;