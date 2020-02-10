import React from "react";
import "./App.css";
import "./components/Header";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import DataProvider from "./components/Dataprovider";
import Campaign from "./components/Campaign";
import Editorjs from "./components/Editorjs";

//For react-admin to work
import { Admin, Resource } from "react-admin";
import { UserList } from "./components/users";
import { PostList, PostEdit, PostCreate } from "./components/posts";
import {
  CampaignList,
  CampaignEdit,
  CampaignCreate
} from "./components/campaigns";

//Material UI design
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

//fake data
import jsonServerProvider from "ra-data-json-server";
const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");

const theme = createMuiTheme({
  palette: {
    secondary: purple,
    type: "light" // Switching the dark mode on is a single property value change.
  }
});

const App = () => (
  <>
    {/* <Editorjs /> */}
    <Admin theme={theme} dashboard={Dashboard} dataProvider={dataProvider}>
      <Resource
        name="posts"
        list={PostList}
        icon={PostIcon}
        edit={PostEdit}
        create={PostCreate}
      />
      <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
  </>
);

export default App;
