/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import fastify from "fastify";
import { GreetingService } from "./GreetingService";

const greetingService = new GreetingService();

const app = fastify({ logger: true }).get("/greeting", async req => {
  const { name } = req.query;

  return greetingService.greet(name);
});

export { app };
