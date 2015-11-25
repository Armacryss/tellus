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
  'click [data-action=send_email]': function (event, template) {
    event.preventDefault();
    console.log('Here here !');
  }
});
