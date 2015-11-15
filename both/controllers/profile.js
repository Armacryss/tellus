ProfileController = AppController.extend({
  data: {
    user: Meteor.user,
    userSchema: Schema.User,
    bread: [
      {path: 'home', name: 'Home'},
      {path: 'userprofile', name: 'Profile'}
    ]
  },
  onAfterAction: function () {
    Meta.setTitle('Profile');
  }
});

ProfileController.events({
  'click [data-action=save]': function (event, template) {
    event.preventDefault();
    console.log(this);
  }
});
