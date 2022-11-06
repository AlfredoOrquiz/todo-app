import React from 'react';
import ToDo from './components/todo.jsx';
import SettingsProvider from './context/setting.js';
import './styles/app.css';

export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <ToDo />
      </SettingsProvider>
    );
  }
}