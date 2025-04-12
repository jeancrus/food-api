import express from "express";
import routes from "./routes";
import { handleErrors } from "./middlewares/handle-error";

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());

app.use(routes);

/**
 * Middleware to handle errors
 * 400 - Client error
 * 500 - Server error
 */
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
