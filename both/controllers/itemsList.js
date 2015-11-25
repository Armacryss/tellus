ItemsListController = AppController.extend({
  waitOn: function() {
    return this.subscribe('items');
  },
  data: {
    items: Items.find({}),
  },
  onAfterAction: function () {
    Meta.setTitle(TAPi18n.__('items.list'));
    return true;
  }
});

ItemsListController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
