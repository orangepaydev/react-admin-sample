import React from 'react';
import logo from './logo.svg';
import './App.css';
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource, ListGuesser } from 'react-admin';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App: React.FC = () => {
  return (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />
  </Admin>
  );
}

export default App;
