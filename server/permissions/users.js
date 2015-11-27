Meteor.users.allow({
    'update': function(userId, doc, fields, modifier) {
        // User can update his own account
        if(userId === doc._id) {
            return true;
        }
        
        var user = Meteor.users.findOne( { _id : userId } );
        return (user && user.isAdmin());
    }
});
