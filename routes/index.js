const keystone = require("keystone");
const importRoutes = keystone.importer(__dirname);
const cors = require('cors')
const {checkToken,verifyToken} = require("./middleware")
const API_VERSION = "/api/v1";

const routes = {
  api: importRoutes("./api")
};

// Setup Route Bindings
exports = module.exports = function(app) {
  //api
  app.use(cors())
  app.post(`${API_VERSION}/login`, routes.api.loginUser.loginUser);
  app.get(`${API_VERSION}/resizeImage`,checkToken,verifyToken, routes.api.imgResize.getResizedImage);
};
