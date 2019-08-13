/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { v4 } from "uuid";

export class GreetingService {
  greet(name: string = "World") {
    return {
      id: v4(),
      message: `Hello, ${name}!`,
    };
  }
}
