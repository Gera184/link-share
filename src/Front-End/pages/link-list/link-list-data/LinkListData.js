import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./LinkListData.css";

const LinkListData = ({ link, user, description, createdDate }) => {
  return (
    <div>
      <h1>{link}</h1>
      <h1>{user}</h1>
      <h1>{description}</h1>
      <h1>{createdDate}</h1>
    </div>
  );
};

export default LinkListData;
