Users = Meteor.users;

Users.helpers({  
  getUsername: function() {
        var user = Meteor.users.findOne({ "_id" : this._id });
        return user.username !== undefined ? user.username : user.getMainEmail();
  },
  getMainEmail: function() {
        var user = Meteor.users.findOne({ "_id" : this._id });
        return user.emails !== undefined ? user.emails[0].address : '';
  },
  isAdmin : function() {
        return Roles.userIsInRole(this._id, [Tellus.Enum.Roles.ADMIN]);
  },
  getLanguage: function() {
        var user = Meteor.users.findOne({ "_id" : this._id });
        return user.profile.localization !== undefined ? user.profile.localization : 'en';
  }
});