const path = require("path");
// requiring express package
const express = require("express");
const session = require("express-session");
// Creating local port
const PORT = process.env.PORT || 3001;
const app = express();
// creating connection
const sequelize = require("./config/connection.js");

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Add after Express middleware
app.use("/api", apiRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
