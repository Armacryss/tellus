Meteor.startup(function() {
    if(Meteor.users.find().count() === 0) {
        var userId = Accounts.createUser({
            username: 'Administrateur',
            email: 'admin@tellus.com',
            password: 'claire',
            roles: [Tellus.Enum.Roles.ADMIN, Tellus.Enum.Roles.REGISTERED_USER],
            profile: {
                firstName: 'John',
                lastName: 'Doe',
                gender: 'Male',
                bio: 'Webmaster'
            }
        });
        
        Roles.addUsersToRoles(userId, [Tellus.Enum.Roles.ADMIN]);
        
        Accounts.createUser({
            username: 'Armacryss',
            email: 'armacryss@tellus.com',
            password: 'claire',
            roles: [Tellus.Enum.Roles.REGISTERED_USER],
            profile: {
                firstName: 'Gabriel',
                lastName: 'Doe',
                gender: 'Male',
                bio: 'Webmaster'
            }
        });
                
        Accounts.createUser({
            username: 'Calimera',
            email: 'calimera@tellus.com',
            password: 'claire',
            roles: [Tellus.Enum.Roles.REGISTERED_USER],
            profile: {
                firstName: 'Claire',
                lastName: 'Doe',
                gender: 'Male',
                bio: 'Webmistress'
            }
        });
    }
});
