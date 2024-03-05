import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { TasksCollection } from  '/imports/api/TasksCollection';
import { Task } from './Task';
import { useTracker } from '../../.meteor/local/build/programs/server/assets/packages/react-meteor-data/react-meteor-data';

const task = [
  {_id: 1, text: 'First Task'},
  {_id: 2, text: 'Second Task'},
  {_id: 3, text: 'Third Task'},
]

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}).fetch());

  return (
  <div>
    <h1>Welcome to Meteor!</h1>

    <ul>
      {task.map(task => <Task key={task._id} task={task}/>)}
    </ul>
  </div>
  );
};
