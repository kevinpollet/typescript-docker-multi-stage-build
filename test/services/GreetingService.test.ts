/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { GreetingService } from "../../src/services/GreetingService";

describe("GreetingService", () => {
  const greetingService = new GreetingService();

  describe("sayHello", () => {
    it("should say Hello to the given name", () => {
      const message = greetingService.sayHello("Moby Dock");

      expect(message.startsWith("Hello Moby Dock")).toBeTruthy;
    });

    it("should say Hello World if the given name is undefined", () => {
      const message = greetingService.sayHello();

      expect(message.startsWith("Hello World")).toBeTruthy;
    });
  });
});
