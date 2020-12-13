import { app } from "./app";

app.listen(3000, "0.0.0.0").catch((err: Error) => {
  app.log.error(err.message);
  process.exit(1);
});
