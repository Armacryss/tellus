Template.registerHelper('is_current_language', function(lang) {
  return (TAPi18n.getLanguage() === lang);
});
Template.registerHelper('current_language_tag', function(lang) {
    if(Blaze._globalHelpers['is_current_language'](lang)) {
        return '<i class="mdi mdi-star-circle"></i> ';
    }
});
