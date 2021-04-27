import React from 'react';
import './App.css';

const tasks = ['Arlen Freitas!', 'Estudando com', 'Henrique Rikos Zozimo'];
const task = (value) => {
  return (
    <li>{value}</li>
  );
}
class Components extends React.Component {
  render() {
    return (tasks.map((e) => task(e)))
  };
}
export default Components;