const AccessControl = require("accesscontrol")

const ac = new AccessControl()

const roles = (function() 
  {
    //Granting user role
    ac.grant("user")
      .readAny("item", ["!users"])
    //Granting admin role
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