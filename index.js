import app from "./app.js";
import logger from "./src/configs/logger.config.js";

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  logger.info(`server is running at ${PORT} port`);
});
