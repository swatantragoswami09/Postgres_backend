import "./config";
import Database from "./database";
import environment from "./config/environment";
import dbConfig from "./config/database";

// IIFE= Immediately Invoked Function Expression
(async () => {
  try {
    //  connect to the database
    const db = new Database(environment.nodeEnv, dbConfig);
    await db.connect();

    // Import the App and set up the server
    const App = require("./app").default;
    const app = new App();
    app.listen();
  } catch (error) {
    console.log(
      "Something went wrong when initializing the app:\n",
      error.stack
    );
  }
})();
