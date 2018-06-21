import React from "react";
import "./ProfilePicture.css";

const imgStyle = {
    height: 100,
    // float: right
}
const ProfilePicture = props => (
    <img src={props.src} style= {imgStyle}/>
)

export default ProfilePicture;
