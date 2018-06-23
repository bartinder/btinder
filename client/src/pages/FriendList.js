import React from "react";
import Thumbnail from "../components/Thumbnail";
import { Container, Row, Col } from "../components/Grid";
import AddFriend from "../components/AddFriend";
import InviteFriend from "../components/InviteFriend";
import API from "../utils/API";


const FriendList = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-2 sm-3">
          <Thumbnail src={props.profilePicture || "https://placehold.it/300x300"} />
        </Col>
        <Col size="xs-10 sm-9">
          <h3>{props.firstName} {props.lastName}</h3>
          <p>Age: {props.age}</p>
          <AddFriend />
          <InviteFriend />
        </Col>
      </Row>
    </Container>
  </li>
);

export default FriendList;

