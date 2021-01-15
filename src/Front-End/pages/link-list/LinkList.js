import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import LinkListData from "./link-list-data/LinkListData";
import "./LinkList.css";
import { Navbar } from "../../navbar/Navbar";

export const LinkList = () => {
  const [links, setLinks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("/link/times")
      .then((res) => {
        setLinks(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(links);

  const filteredProduct = links.filter((links) =>
    links.user.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="product-main-con-list">
      <Navbar />
      <Row>
        <Col>
          <input
            className="search-input-list"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder=" search"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            {filteredProduct.map((links) => {
              return (
                <LinkListData
                  link={links.link}
                  user={links.user}
                  description={links.description}
                  createdDate={links.createdDate}
                />
              );
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
};
