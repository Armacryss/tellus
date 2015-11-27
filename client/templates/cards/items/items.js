Template.card_user.onCreated(function() {
    return this.subscribe('items');
});

Template.card_items.helpers({
    card_item_data: function() {
        return {
            label: 'items.label',
            message: 'items.message',
            cardItemCount : Items.find({}).count(),
            see_more: 'see_items',
            action_name: 'view_list_items',
            path: {
                is_route: true,
                route_name: 'items.list'
            }
        };
    }
});