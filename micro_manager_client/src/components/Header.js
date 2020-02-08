import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// App Components
import Campaign from "./Campaign";
import Gallery from "./Gallery";
import Editorjs from "./Editorjs";

const linkStyle = {
  marginRight: 15
};

export default function Header() {
  return (
    <Router>
      <div>
        <a style={linkStyle}>
          <Link to="/">Dashboard</Link>
        </a>
        <a style={linkStyle}>
          <Link to="/campaign">Marketing Campaigns</Link>
        </a>
        <a style={linkStyle}>
          <Link to="/gallery">Gallery</Link>
        </a>
        <a style={linkStyle}>
          <Link to="/editorjs">Editor.js</Link>
        </a>

        <Switch>
          <Route path="/campaign">
            <Campaign />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/editorjs">
            <Editorjs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
