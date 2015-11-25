UsersListController = AppController.extend({
  waitOn: function() {
    return this.subscribe('allUsers');
  },
  onAfterAction: function () {
    Meta.setTitle(TAPi18n.__('users.list'));
    return true;
  }
});

UsersListController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
