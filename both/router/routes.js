Router.route('/', {
  name: 'home',
  controller: 'HomeController'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.route('/items/new', {
  name: 'items.new',
  controller: 'ItemsNewController'
});

Router.route('/items/list', {
  name: 'items.list',
  controller: 'ItemsListController'
});

Router.route('/profile', {
  name: 'userprofile',
  template: 'userprofile',
  controller: 'ProfileController'
});

Router.route('/profile/:_id', {
  name: 'admin_userProfile',
  template: 'userprofile',
  controller: 'ProfileController'
});

Router.route('/users/list', {
  name: 'users.list',
  controller: 'UsersListController'
});

Router.plugin('ensureSignedIn', {
  except: ['home', 'atSignIn', 'atSignUp']
});

Router.onBeforeAction(function() {
  if(Meteor.user() && Meteor.user().isAdmin()) {
    this.next();
  }
  else {
    Tellus.tellus_toast_fail(TAPi18n.__('notadmin'));
    Router.go('home');
    this.next();
  }
},
{
  only: ['dashboard', 'users.list', 'admin_userProfile']
})