import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  SimpleForm,
  Edit,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
  DateInput,
  useDataProvider
} from "react-admin";

const Aside = () => (
  <div style={{ width: 200, margin: "1em" }}>
    <Typography variant="h6">Campaign details</Typography>
    <Typography variant="body2">
      Campaign page will be publicly available once published
    </Typography>
  </div>
);

export const CampaignList = props => (
  <List aside={<Aside />} {...props} title="List of Campaigns">
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="user_id" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);

const CampaignTitle = ({ record }) => {
  return <span>Campaign {record ? `"${record.title}"` : ""}</span>;
};

export const CampaignEdit = props => {
  const [theme, setTheme] = useState("");
  const dataProvider = useDataProvider();

  useEffect(() => {
    dataProvider.getOne("campaigns", { id: props.id }).then(({ data }) => {
      setTheme(data.theme);
    });
  }, []);

  return (
    <Edit title={<CampaignTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <ReferenceInput source="user_id" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <DateInput source="startDate" />
        <DateInput source="endDate" />
        <SelectInput
          source="theme"
          choices={[
            { id: "luckydraw1", name: "Lucky Draw" },
            { id: "infosite1", name: "Infosite" }
          ]}
          onChange={x => setTheme(x.target.value)}
        />
        <button
          variant="contained"
          onClick={event => {
            window.open("/#/" + theme + "?id=" + props.id);
            event.preventDefault();
          }}
          // onClick={event => window.open("/#/" + theme + "?id=" + props.id)}
        >
          Edit Theme
        </button>
        <TextInput source="background_image" fullWidth="true" />
      </SimpleForm>
    </Edit>
  );
};

export const CampaignCreate = props => {
  const [theme, setTheme] = useState("");

  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <TextInput disabled source="id" />
        <ReferenceInput source="user_id" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <DateInput source="startDate" />
        <DateInput source="endDate" />
        <SelectInput
          source="theme"
          choices={[
            { id: "luckydrawsample", name: "Lucky Draw" },
            { id: "infositesample", name: "Infosite" }
          ]}
          onChange={x => setTheme(x.target.value)}
        />
        <button
          variant="contained"
          onClick={event => {
            window.open("/#/" + theme);
            event.preventDefault();
          }}
        >
          Theme Preview
        </button>
        <TextInput
          source="background_image"
          defaultValue="https://e4z6b5i3.stackpathcdn.com/wp-content/uploads/2015/03/Island-1.jpg"
          fullWidth="true"
        />
      </SimpleForm>
    </Create>
  );
};
