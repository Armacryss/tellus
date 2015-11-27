Template.card_user.onCreated(function() {
    return this.subscribe('allUsers');
});
Template.card_user.helpers({
    card_user_data: function() {
        return {
            label: 'users.label',
            message: 'users.message',
            cardItemCount : Meteor.users.find({}).count(),
            see_more: 'see_users',
            action_name: 'view_list_users',
            path: {
                is_route: true,
                route_name: 'users.list'
            }
        };
    }
});