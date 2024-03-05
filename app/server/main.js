import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { TasksCollection } from '/imports/api/TasksCollection';

const insertTask = taskText => TasksCollection.insert({ text: taskText });


async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.startup(() => {
  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(insertTask)
  }
});

  // We publish the entire Links collection to all clients.
  // In order to be fetched in real-time to the clients
