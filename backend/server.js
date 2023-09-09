const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./dbConnect");
const { config } = require("dotenv");
const userRoutes = require("./routes/user");
const codeRoutes = require( "./routes/codeRoutes" );
const feedbackRoutes = require( "./routes/feedbackRoutes" );
const inviteRoutes = require("./routes/inviteRoutes");

app.use(cors());
app.use(express.json());

//allows us access environment variables like dotenv files
config();

dbConnect();

//User 
app.use("/api/user", userRoutes);

//IDE
app.use( "/api/ide", codeRoutes );

//Feedback
app.use("/api/feedback", feedbackRoutes);

//Invitation
app.use("/api/invitation", inviteRoutes);

app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});

