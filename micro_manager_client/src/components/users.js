import React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";
import MyUrlfield from "./myUrlField";

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <MyUrlfield source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);
