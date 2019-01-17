import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Glyphicon } from "react-bootstrap";
import "./DropDownButton.css";
import axios from "axios";

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
    }).catch(err => {
        console.log('Logout error: ' + err)
    })
  }

  render() {
    const imageStyle = {
        height: "100px",
        paddingRight: "10px"
    }
    return (
      <div>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle nocaret="true">
            <Glyphicon glyph="align-justify" />
          </DropdownToggle>
          <DropdownMenu>
            <div className="row">
              <div className="col-12">
                <DropdownItem id="profile-pic">
                  <img
                    alt="profile"
                    src={this.props.src}
                    style={imageStyle}
                    className="rounded img-fluid mx-auto d-block"
                  />
                </DropdownItem>
                <DropdownItem id="name" className="d-flex justify-content-center">
                  {this.props.firstName} {this.props.lastName}
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem id="settings" href="/profile" className="d-flex justify-content-center">
                  Settingsss
                </DropdownItem>
                <DropdownItem id="settings" href="/mystuff" className="d-flex justify-content-center">
                  My Bars and Friends
                </DropdownItem>
                <DropdownItem id="logout" onClick={this.logout} className="d-flex justify-content-center">
                  Sign out
                </DropdownItem>
              </div>
            </div>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
}
