import React from "react";
import "./App.css";
import "./components/Header";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import DataProvider from "./components/Dataprovider";

//Editor.js
import Editorjs from "./components/Editorjs";

//TinyMCE
import TinyMCE from "./components/tinyMCE";

//For react-admin to work
import { Admin, Resource } from "react-admin";
import { UserList } from "./components/users";
import { PostList, PostEdit, PostCreate } from "./components/posts";
import {
  CampaignList,
  CampaignEdit,
  CampaignCreate
} from "./components/campaigns";
import authProvider from "./components/authProvider";

//Material UI design
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

//fake data
import jsonServerProvider from "ra-data-json-server";
// const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");

const theme = createMuiTheme({
  palette: {
    secondary: purple,
    type: "light" // Switching the dark mode on is a single property value change.
  }
});

const App = () => (
  <>
    {/* <Admin
      theme={theme}
      dashboard={Dashboard}
      dataProvider={DataProvider}
      authProvider={authProvider}
    >
      <Resource
        name="campaigns"
        list={CampaignList}
        icon={PostIcon}
        edit={CampaignEdit}
        create={CampaignCreate}
      />
      <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin> */}
  </>
);

export default App;
