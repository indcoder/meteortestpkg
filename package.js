Package.describe({
  name: 'incoder:testpack',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Demonstration of an Atmosphere package',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/indcoder/meteortestpkg.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('testpack.js' , 'client');
  api.addFiles('servertestpack.js', 'server');

  if(api.export) {
    api.export('Testpack');
  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('incoder:testpack');
  api.addFiles('testpack-tests.js');
});


Npm.depends({
  "colors" : "0.6.2"
})
