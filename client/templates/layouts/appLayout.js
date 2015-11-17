Meteor.startup(function() {
  AutoForm.setDefaultTemplate('materialize');

  $('body').on('click', '[data-action=logout]', function(event) {
    event.preventDefault();
    AccountsTemplates.logout();
  });
  
  $('body').on('click', '[data-action=switch_fr]', function(event) {
    event.preventDefault();
    Blaze._globalHelpers['switch_language']('fr');
  });
    
  $('body').on('click', '[data-action=switch_en]', function(event) {
    event.preventDefault();
    Blaze._globalHelpers['switch_language']('en');
  });
  
  Tracker.autorun(function(){
    if(Meteor.userId()){
      var user = Meteor.users.findOne({ _id: Meteor.userId()});
      Blaze._globalHelpers['switch_language'](user.getLanguage());
    }
  });
});

