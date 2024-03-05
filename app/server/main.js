import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { TasksCollection } from '/imports/api/TasksCollection';

const insertTask = taskText => TasksColection.insert({ text: taskText })

Meteor.startup(async () => {
  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Sixth Task',
    ].forEach(insertTask)
  }
});
