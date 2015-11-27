HomeController = AppController.extend({
  data: {
    bread: [{path: 'home',name: 'home'}]
  },
  onAfterAction: function () {
    Meta.setTitle(TAPi18n.__('home'));
  }
});
