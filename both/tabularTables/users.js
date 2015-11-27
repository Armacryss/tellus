TabularTables.Users = new Tabular.Table({
    name: "Users",
    collection: Meteor.users,
    pub: "allUsers",
    allow: function (userId) {
        var user = Meteor.users.findOne({ _id: userId });
        return user && user.isAdmin();
    },
    columns: [
        {data: "username", title: "Username"},
        {data: "profile.firstName", title: "First name"},
        {data: "profile.lastName", title: "Last name"},
        {data: "roles", title: "Roles"},
        {
            data: "createdAt",
            title: "Created Date",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).calendar();
                } else {
                    return "Never";
                }
            }
        },
        {
          tmpl: Meteor.isClient && Template.usersList_cell_actions
        }
    ]
});
