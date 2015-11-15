DashboardController = AppController.extend({
  waitOn: function() {
    return this.subscribe('items');
  },
  data: {
    items: Items.find({}),
    bread: [
      {path: 'home', name: 'home'},
      {path: 'dashboard', name: 'dashboard'}
    ]
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
