Template.registerHelper('is_current_language', function(lang) {
  return (TAPi18n.getLanguage() === lang);
});
Template.registerHelper('current_language_tag', function(lang) {
    if(Blaze._globalHelpers['is_current_language'](lang)) {
        return '<i class="mdi-toggle-star"></i> ';
    }
});
Template.registerHelper('switch_language', function(lang) {
    TAPi18n.setLanguage(lang);
    T9n.setLanguage(lang);
    moment.locale(lang);
    moment().locale(lang);
});