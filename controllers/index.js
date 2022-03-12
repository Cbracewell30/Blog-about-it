const router = require("express").Router();
const apiRoutes = require("./api/user-routes.js");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
