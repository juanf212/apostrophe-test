var path = require("path");

var apos = require("apostrophe")({
  shortName: "prueba",

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {
    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.

    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project
    "apostrophe-pages": {
      filters: {
        ancestors: {
          childern: {
            depth: 2
          }
        },
        childern: true
      },
      types: [
        //This is the new section
        {
          name: "default",
          label: "Default"
        },
        //The rest is what what was there already
        {
          name: "home",
          label: "Home"
        }
      ]
    },
    "apostrophe-templates": {
      viewsFolderFallback: path.join(__dirname, "views")
    }
  }
});
