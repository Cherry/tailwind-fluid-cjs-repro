# Issues using Fluid programatically

We have a workflow where we use Tailwind to generate a static "theme" output using `resolveConfig`. An example of this can be seen in the `generate-theme.js` file.

- With Fluid disabled, this works without issue
- However, if you uncomment line 1 in `tailwind.config.js` to enable Fluid, the `generate-theme.js` file will throw an error like so:

```
E:\GitHub\tailwind-fluid-cjs-repro\node_modules\fluid-tailwind\dist\index.js:8
var mapObject = require('map-obj');
                ^

Error [ERR_REQUIRE_ESM]: require() of ES Module E:\GitHub\tailwind-fluid-cjs-repro\node_modules\map-obj\index.js from E:\GitHub\tailwind-fluid-cjs-repro\node_modules\fluid-tailwind\dist\index.js not supported.
Instead change the require of E:\GitHub\tailwind-fluid-cjs-repro\node_modules\map-obj\index.js in E:\GitHub\tailwind-fluid-cjs-repro\node_modules\fluid-tailwind\dist\index.js to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (E:\GitHub\tailwind-fluid-cjs-repro\node_modules\fluid-tailwind\dist\index.js:8:17) {
  code: 'ERR_REQUIRE_ESM'
}
```
