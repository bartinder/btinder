import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,  } from 'reactstrap';
import {Glyphicon} from "react-bootstrap"
import "./DropDownButton.css"
import axios from "axios"

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
    axios.post('/api/users/logout').then(response => {
      console.log(response.data)
      window.location.assign("/login");

    }).catch(error => {
        console.log('Logout error')
    })
  }

  render() {
    const imageStyle = {
        height: "75px",
        paddingRight: "10px"
    }
    return (
    <div>
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nocaret="true">
            <Glyphicon glyph="align-justify" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header><img alt="profile" src={this.props.src} style={imageStyle}/>{this.props.firstName} {this.props.lastName}</DropdownItem>
          <DropdownItem><a href="/profile">My Profile</a></DropdownItem>
          <DropdownItem onClick={this.logout}>Logout</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
    );
  }
}