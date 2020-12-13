import fastify from "fastify";
import { GreetingService } from "./GreetingService";

const greetingService = new GreetingService();

const app = fastify({ logger: true }).get<{ Querystring: { name?: string } }>(
  "/greeting",
  async (req) => {
    const { name } = req.query;

    return greetingService.greet(name);
  }
);

export { app };
