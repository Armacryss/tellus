Meteor.startup(function() {
  AutoForm.setDefaultTemplate('materialize');

  $('body').on('click', '[data-action=logout]', function(event) {
    event.preventDefault();
    AccountsTemplates.logout();
  });
  
  $('body').on('click', '[data-action=switch_fr]', function(event) {
    event.preventDefault();
    TAPi18n.setLanguage('fr');
    T9n.setLanguage('fr');
    moment.locale('fr');
    moment().locale('fr');
  });
    
  $('body').on('click', '[data-action=switch_en]', function(event) {
    event.preventDefault();
    TAPi18n.setLanguage('en');
    T9n.setLanguage('en');
    moment.locale('en');
    moment().locale('en');
  });
});
