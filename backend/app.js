require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { errors } = require("celebrate");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const auth = require("./middlewares/auth");
const errorHandler = require("./middlewares/error-handler");
const { createUser, login } = require("./controllers/users");
const { validateSignup, validateSignin } = require("./middlewares/validation");
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

const { PORT = 3000, MONGODB_URI = "mongodb://localhost:27017/aroundb" } =
  process.env;

const app = express();

mongoose.connect(MONGODB_URI);

//app.use(cors());
const allowedOrigins = [
  "http://localhost:5173",
  "https://laudable-spontaneity-production.up.railway.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("El servidor va a caer");
  }, 0);
});

app.post("/signup", validateSignup, createUser);
app.post("/signin", validateSignin, login);

app.use(auth);

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
