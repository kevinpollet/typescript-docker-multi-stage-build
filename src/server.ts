/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { app } from "./app";

app.listen(3000, "0.0.0.0").catch((err: Error) => {
  app.log.error(err);
  process.exit(1);
});
