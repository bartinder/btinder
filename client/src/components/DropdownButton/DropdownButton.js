import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,  } from 'reactstrap';
import {Glyphicon, Button} from "react-bootstrap"
import "./DropDownButton.css"
import {Link} from "react-router-dom"
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
    return (
    <div>
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nocaret="true">
            <Glyphicon glyph="align-justify" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem><Link to="/"></Link>My Profile</DropdownItem>
          <DropdownItem onClick={this.logout}>Logout</DropdownItem>
          {/* <DropdownItem divider /> */}
          {/* <DropdownItem>Another Action</DropdownItem> */}
        </DropdownMenu>
      </ButtonDropdown>
    </div>
    );
  }
}