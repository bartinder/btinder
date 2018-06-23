import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,  } from 'reactstrap';
import {Glyphicon, Button} from "react-bootstrap"
import "./DropDownButton.css"
import {Link} from "react-router-dom"
import axios from "axios"
import ProfilePicture from "../ProfilePicture/ProfilePicture"

export default class DropdownButton extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log(response.data)
    //   if (response.status === 200) {
    //     this.props.updateUser({
    //       loggedIn: false,
    //       email: null
    //     })
    //   }
      window.location.assign("/login");

    }).catch(error => {
        console.log('Logout error')
    })
  }

  render() {
    const imageStyle = {
        height: "50px"
    }
    return (
    <div>
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nocaret="true">
            <Glyphicon glyph="align-justify" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header><img alt="profile" src={this.props.src} style={imageStyle}/>{this.props.firstName} {this.props.lastName}</DropdownItem>
          <DropdownItem><Link to="/"></Link>My Profile</DropdownItem>
          <DropdownItem onClick={this.logout}>Logout</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
    );
  }
}