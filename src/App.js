import React from "react";
import { Main } from "./Front-End/main/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LinkList } from "./Front-End/pages/link-list/LinkList.js";
import { Navbar } from "./Front-End/navbar/Navbar";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/home" component={Main} />
          <Route path="/list" component={LinkList} />
        </Switch>
      </Router>
    </div>
  );
};
