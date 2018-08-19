import React, { Component } from "react";
import "./profile.css";


class MyStuff extends Component {
    state = {
        user: ""
    }


    render() {
    const cardStyle = {
        marginTop: '10px'
    }

    return (

    <div style={{marginBottom:"50px"}}>
        <div className="card" style={cardStyle}>
            <div className="card-body">
                <div className="card-header">
                    <h3 className="card-title" id="settings">
                        My Bars
                    </h3>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-12">
                        <h3>Liked Bars</h3>
                    </div>
                    <div className="col-12">
                        <div>
                            {this.props.likedBars.map(element => {
                                return   <li key={element.toString()}> {element} </li>
                            })}
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="row d-flex align-items-center">
                    <div className="col-12">
                        <h3>Disliked Bars</h3>
                    </div>
                    <div className="col-12">
                        <div>
                            {this.props.disLikedBars.map(element => {
                                return   <li key={element.toString()}> {element} </li>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

        <div className="card" style={cardStyle}>
            <div className="card-body">
                    <div className="card-header">
                        <h3 className="card-title" id="settings">My Friends</h3>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div>
                            {this.props.friendsArray.map(element => {
                                return      (<div key={element.firstName}><div className="row d-flex align-items-center"> 
                                                <div className="col-12">
                                                    <ul style={{color: "#090070"}}> <h3>{element.firstName} {element.lastName} </h3></ul>
                                                </div>
                                                <div className="col-4">
                                                    <p> Their Liked Bars: </p>
                                                </div>
                                                <div className="col-8">
                                                    {element.likedArray.map(element => {
                                                    return (<li key={element}> {element}</li> )})}
                                                </div>
                                            </div><hr></hr></div>)
                            })}
                        </div>
                    </div>
            </div>
        </div>
    </div>

    )}
}

export default MyStuff;