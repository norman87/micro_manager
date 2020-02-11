import React from "react";
import "./App.css";
import "./components/Header";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import DataProvider from "./components/Dataprovider";

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
// const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");

const theme = createMuiTheme({
  palette: {
    secondary: purple,
    type: "light" // Switching the dark mode on is a single property value change.
  }
});

// class App extends React.Component {

//   render() {
//     return (
//       <>
//         <Admin theme={theme} dashboard={Dashboard} dataProvider={DataProvider}>
//           <Resource
//             name="campaigns"
//             list={CampaignList}
//             icon={PostIcon}
//             edit={CampaignEdit}
//             create={CampaignCreate}
//           />
//           <Resource name="users" list={UserList} icon={UserIcon} />
//         </Admin>
//       </>
//     );
//   }
// }

const App = () => (
  <>
    {/* <Editorjs /> */}
    <Admin theme={theme} dashboard={Dashboard} dataProvider={DataProvider}>
      <Resource
        name="campaigns"
        list={CampaignList}
        icon={PostIcon}
        edit={CampaignEdit}
        create={CampaignCreate}
      />
      <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
  </>
);

export default App;
