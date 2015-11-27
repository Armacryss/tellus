Template.itemsList.onCreated(function() {
    return this.subscribe('items');
});
Template.itemsList.helpers({
   items: function() {
      return Items.find({});
   }
});