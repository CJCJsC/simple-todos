import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { TasksCollection } from '/imports/api/TasksCollection';
<<<<<<< HEAD

const insertTask = taskText => TasksCollection.insert({ text: taskText });

=======
>>>>>>> 5917c2566a4462aadade20e54dae4981e0a5b5da

const insertTask = taskText => TasksColection.insert({ text: taskText })

<<<<<<< HEAD
Meteor.startup(() => {
=======
Meteor.startup(async () => {
>>>>>>> 5917c2566a4462aadade20e54dae4981e0a5b5da
  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
<<<<<<< HEAD
      'Seventh Task'
    ].forEach(insertTask)
  }
});

  // We publish the entire Links collection to all clients.
  // In order to be fetched in real-time to the clients
=======
      'Sixth Task',
    ].forEach(insertTask)
  }
});
>>>>>>> 5917c2566a4462aadade20e54dae4981e0a5b5da
