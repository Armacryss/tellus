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

Router.route('/profile', {
  name: 'userprofile',
  template: 'userprofile',
  controller: 'ProfileController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard', 'user_profile']
});
