Meteor.startup(function() {
  AutoForm.setDefaultTemplate('materialize');

  $('body').on('click', '[data-action=logout]', function(event) {
    event.preventDefault();
    AccountsTemplates.logout();
  });
  
  Tracker.autorun(function(){
    Blaze._globalHelpers['initLanguage']();
  });
});
