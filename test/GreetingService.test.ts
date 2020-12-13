import { GreetingService } from "../src/GreetingService";

describe("GreetingService", () => {
  const greetingService = new GreetingService();

  describe("greet", () => {
    it("should greet the given name", () => {
      const name = "Moby Dock";
      const greeting = greetingService.greet(name);

      expect(greeting.id).not.toBeNull();
      expect(greeting.message).toEqual(`Hello, ${name}!`);
    });

    it("should greet the World if the given name is undefined", () => {
      const greeting = greetingService.greet();

      expect(greeting.id).not.toBeNull();
      expect(greeting.message).toEqual(`Hello, World!`);
    });
  });
});
