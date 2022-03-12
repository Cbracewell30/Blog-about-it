const express = require("express");
// Add near the top of the file
const controllerRoutes = require("./controllers");
const req = require("express/lib/request");
const PORT = process.env.PORT || 3001;
const app = express();

const sequelize = require("./config/connection");

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Add after Express middleware
app.use(controllerRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
