import React from 'react';
<<<<<<< HEAD
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/imports/api/TasksCollection';
import { Task } from './Task';

=======
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

>>>>>>> 5917c2566a4462aadade20e54dae4981e0a5b5da
export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}).fetch());

  return (
<<<<<<< HEAD
      <div>
        <h1>Welcome to Meteor!</h1>

        <ul>
          { tasks.map(task => <Task key={ task._id } task={ task }/>) }
        </ul>
      </div>
  );
};
=======
  <div>
    <h1>Welcome to Meteor!</h1>

    <ul>
      {task.map(task => <Task key={task._id} task={task}/>)}
    </ul>
  </div>
  );
};
>>>>>>> 5917c2566a4462aadade20e54dae4981e0a5b5da
