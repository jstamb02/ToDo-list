Items = new Mongo.Collection("items");

if (Meteor.isClient) {
  Template.body.helpers({
    items: function() {
      return Items.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
    "submit .new-item": function (event) {

    var text = event.target.text.value;

    Items.insert({
      text: text,
      createdAt: new Date()
    });

    event.target.text.value = "";

    return false;
    }
  });

  Template.item.events({
    "click .delete": function() {
      Items.remove(this._id);
    }
  });
}




