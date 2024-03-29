import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Task } from './Task';
import { TasksCollection } from '/imports/api/TasksCollection';
import { TaskForm } from './TaskForm';

const toggleChecked = ({ _id, isChecked }) => {
  TasksCollection.update(_id, {
    $set: {
      isChecked: !isChecked
    }
  })
};

export const App = () => {
  const [hideCompleted, setHideCompleted] = useState(false);

  const hideCompletedFilter = { isChecked: { $ne: true } };

  const tasks = useTracker(() =>
      TasksCollection.find(hideCompleted ? hideCompletedFilter : {}, {
        sort: { createdAt: -1 },
      }).fetch()
  );

  const pendingTasksCount = useTracker(() =>
      TasksCollection.find(hideCompletedFilter).count()
  );

  const pendingTasksTitle = `${
      pendingTasksCount ? ` (${pendingTasksCount})` : ''
  }`;

  return (

      <div className="main">
        <h1>
          📝️ To Do List
          {pendingTasksTitle}
        </h1>
        <TaskForm/>
        <div className="filter">
          <button onClick={() => setHideCompleted(!hideCompleted)}>
            {hideCompleted ? 'Show All' : 'Hide Completed'}
          </button>
        </div>
      </div>
  );
};