import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Background from "../assets/background.mp4";
import "./Main.css";
import { Navbar } from "../navbar/Navbar";

const FormattedDate = require("../time_format/time_format.js");

export const Main = () => {
  const [link, setLink] = useState("");
  const [user, setUser] = useState("");
  const [description, setDescription] = useState("");
  const createdDate = FormattedDate.HumanDate();

  const handleChangeLink = (e) => {
    setLink(e.target.value);
  };
  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const hundleOnClick = async (e) => {
    e.preventDefault();

    const linkData = {
      link: link,
      user: user,
      description: description,
      createdDate: createdDate,
    };
    console.log(linkData);

    await axios
      .post("/link/add", linkData)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("link added");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("put somthing you stupid");
      });

    setLink("");
    setUser("");
    setDescription("");
  };

  return (
    <div>
      <Navbar />
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: "50%",
          top: "50%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={Background} type="video/mp4" />
      </video>

      <Container className="product-main-con">
        <Row>
          <Col md={{ span: 12 }}>
            <input
              className="search-input"
              onChange={handleChangeLink}
              type="text"
              placeholder="Link"
              value={link}
            />
          </Col>
          <Col md={{ span: 12 }}>
            <input
              className="search-input"
              onChange={handleChangeUser}
              type="text"
              placeholder="User"
              value={user}
            />
          </Col>
          <Col md={{ span: 12 }}>
            <input
              className="search-input"
              onChange={handleChangeDescription}
              type="text"
              placeholder="Description"
              value={description}
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 12 }} className="a-btn-col">
            <button className="a-btn" type="button" onClick={hundleOnClick}>
              Sumbit
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
