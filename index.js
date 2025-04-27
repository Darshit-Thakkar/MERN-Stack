const express = require("express");
const { connectMongoDb } = require("./connection");
const app = express();
const { logReqRes } = require("./middlewares");
const port = 3000;
const userRouter = require("./routes/user");

// connction
connectMongoDb("mongodb://127.0.0.1:27017/youtube").then(() => {console.log("mongo connected successfully");
});

app.use(express.urlencoded({ extended: false }));

//log file creation
app.use(logReqRes("log.txt"));

//router uses
app.use("/api/users", userRouter);

app.listen(port, () =>
  console.log(`app listening on port http://localhost:${port}`)
);
