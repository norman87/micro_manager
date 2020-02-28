import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Edit,
  SimpleForm,
  TextInput,
  EditButton,
  Create
} from "react-admin";
import MyUrlfield from "./myUrlField";

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <EditButton />
    </Datagrid>
  </List>
);

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm variant="outlined">
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = props => (
  <Create {...props} redirect="list">
    <SimpleForm variant="outlined">
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
    </SimpleForm>
  </Create>
);
