import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// App Components
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
          <Link to="/editorjs">Editor.js</Link>
        </a>

        <Switch>
          <Route path="/editorjs">
            <Editorjs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
