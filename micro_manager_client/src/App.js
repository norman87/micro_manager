import React from "react";
import "./App.css";
import "./components/Header";
import Dashboard from "./components/Dashboard";
import DataProvider from "./components/Dataprovider";

//For react-admin to work
import { Admin, Resource } from "react-admin";
import { UserList, UserEdit, UserCreate } from "./components/users";
import {
  CampaignList,
  CampaignEdit,
  CampaignCreate
} from "./components/campaigns";
import authProvider from "./components/authProvider";
import customRoutes from "./components/customRoutes";

//Material UI design
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import { createMuiTheme } from "@material-ui/core/styles";
import lime from "@material-ui/core/colors/lime";

const theme = createMuiTheme({
  palette: {
    secondary: lime,
    type: "light" // Switching the dark mode on is a single property value change.
  }
});

const App = () => (
  <>
    <Admin
      theme={theme}
      dashboard={Dashboard}
      dataProvider={DataProvider}
      authProvider={authProvider}
      customRoutes={customRoutes}
    >
      <Resource
        name="campaigns"
        list={CampaignList}
        icon={PostIcon}
        edit={CampaignEdit}
        create={CampaignCreate}
      />
      <Resource
        name="users"
        list={UserList}
        icon={UserIcon}
        edit={UserEdit}
        create={UserCreate}
      />
    </Admin>
  </>
);

export default App;
