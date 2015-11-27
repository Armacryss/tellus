Meteor.publishComposite("allUsers", function() {
  return {
    find: function() {
        var user =  Meteor.users.findOne({ _id: this.userId });
        
        if(user && user.isAdmin()) {
            return Meteor.users.find({});
        }
        else {
            return Meteor.users.find({ _id: this.userId });
        }
    }
  }
});