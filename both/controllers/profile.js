ProfileController = AppController.extend({
  waitOn: function() {
    return this.subscribe('allUsers');
  },
  data: function() {
    if(this.params._id) {
      if(Meteor.user().isAdmin()) {
        var current_user = Meteor.users.findOne({ '_id' : this.params._id });
        return {
          user: current_user,
          userSchema: Schema.User,
          bread: [
            {path: 'home', name: 'Home'},
            {path: 'dashboard', name: 'Dashboard'},
            {path: 'admin_userProfile', name: 'Profile'}
          ]
        }
      } else {
        Router.go('userprofile');
      }
    } else {
      return {
        user: Meteor.user,
        userSchema: Schema.User,
        bread: [
          {path: 'home', name: 'Home'},
          {path: 'userprofile', name: 'Profile'}
        ]
      };
    }
  },
  onAfterAction: function () {
    Meta.setTitle('Profile');
  }
});

ProfileController.events({
  'click [data-action=save]': function (event, template) {
    event.preventDefault();
  }
});
