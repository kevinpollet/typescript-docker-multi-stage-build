import { v4 } from "uuid";

export class GreetingService {
  greet(name: string = "World") {
    return {
      id: v4(),
      message: `Hello, ${name}!`,
    };
  }
}
