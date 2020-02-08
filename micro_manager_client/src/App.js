import React from "react";
import "./App.css";
import "./components/Header";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import DataProvider from "./components/Dataprovider";

//For react-admin to work
import { Admin, Resource } from "react-admin";
import { UserList } from "./components/users";
import { PostList } from "./components/posts";
// import jsonServerProvider from "ra-data-json-server";
// import dataProvider from './'

//Material UI design
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";

// const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");

const App = () => (
  <>
    {/* <Layout /> */}
    <Admin dashboard={Dashboard} dataProvider={DataProvider}>
      <Resource name="posts" list={PostList} icon={PostIcon} />
      <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
  </>
);

export default App;
