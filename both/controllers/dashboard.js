DashboardController = AppController.extend({
  waitOn: function() {
  },
  data: {
    bread: [
      {path: 'home', name: 'home'},
      {path: 'dashboard', name: 'dashboard'}
    ]
  },
  onAfterAction: function () {
    Meta.setTitle(TAPi18n.__('dashboard'));
    return true;
  }
});

DashboardController.events({
  'click [data-action=view_list_users]': function (event, template) {
    event.preventDefault();
    this.render('usersList', {to:'dashboard_data'});
  },
  'click [data-action=view_list_items]': function (event, template) {
    event.preventDefault();
    this.render('itemsList', {to:'dashboard_data'});
  }
});
