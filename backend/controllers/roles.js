const AccessControl = require("accesscontrol")

const ac = new AccessControl()

const roles = (function() 
  {
    ac.grant("user")
      .readAny("item", ["!users"])

    ac.grant("admin")
      .extend("user")
      .readAny("item")
      .createAny("item")
      .updateAny("item")
      .deleteAny("item")
 
    return ac;
})();

module.exports = {
    roles
}