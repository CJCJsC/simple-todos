import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

const task = [
  {_id: 1, text: 'First Task'},
  {_id: 2, text: 'Second Task'},
  {_id: 3, text: 'Third Task'},
]

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <ul>
      {task.map(task => <Task key={task._id} task={task}/>)}
    </ul>
  </div>
);
