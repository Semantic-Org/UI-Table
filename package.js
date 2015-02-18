var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-table',
  summary : 'Semantic UI - Table (official): Single component release of table',
  version : '1.9.9',
  git     : 'git://github.com/Semantic-Org/UI-Table.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
