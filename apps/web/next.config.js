const withTM = require("next-transpile-modules")(["ui", "stargate"]);

module.exports = withTM({
  reactStrictMode: true,
});
