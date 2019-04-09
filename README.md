Basic Typescript + rando JS library stack.

Notes to self:

  * `npm install` to install JS deps into `node_modules`.

  * `tsc --build tsconfig.json` to spit out main.js.
    `esModuleInterop` and `module` set things to work with RequireJS,
    while `moduleResolution` tells TS to search for type definitions
    under `node_modules`.

  * `index.html` loads `require.js` and configures URLs for the
    modules we depend on.   Then loads our main module.

  * Main module can now use `import` to pull in dependencies, then
    we're off to the races.

  * Lazily serving stuff out of `node_modules` here.  Probably
    wouldn't do that in real life.
