const path = require("path");

module.exports = {
  components: "src/crafts/**/*.tsx",
  propsParser: require("react-docgen-typescript").parse,
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/styleguide/ThemeWrapper")
  }
};
