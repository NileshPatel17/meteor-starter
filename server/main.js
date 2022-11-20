import { Meteor } from 'meteor/meteor';
import { ContactsCollection } from '/imports/api/ContactsCollection';
import "../imports/api/ContactsMethods";
import "../imports/api/ContactsPublications";

async function insertContact({ name, email, imageUrl }) {
  await ContactsCollection.insertAsync({ name, email, imageUrl, createdAt: new Date() });
}

Meteor.startup(async () => {
  // If the Contacts collection is empty, add some data.
  if (await ContactsCollection.find().countAsync() === 0) {
    await insertContact({
      name: 'Nilesh Patel',
      email: 'nilesh.nvs@hotmail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/27020381?v=4'
    })
  }
});
