import { ContactsCollection } from "./ContactsCollection";
import { Meteor } from "meteor/meteor";

Meteor.publish('allContacts', function publishAllContacts() {
    return ContactsCollection.find(); // Live Query
});

Meteor.publish('Contacts', function publishContacts() {
    return ContactsCollection.find({ archived: { $ne: true }}); // Live Query
});