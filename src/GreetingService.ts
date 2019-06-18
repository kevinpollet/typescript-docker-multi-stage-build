/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

export class GreetingService {
  private static readonly WHALES: ReadonlyArray<string> = [
    ". ><{{{.______)",
    ". ><{{{o ______)",
    ". ><{{{x_______)",
    ". ><(((.______)",
    ". ><(((o ______)",
    ". ><(((x_______)",
  ];

  sayHello(name?: string): string {
    return `Hello ${name || "World"}!! ${this.getRandomWhale()}`;
  }

  private getRandomWhale() {
    const index = Math.floor(Math.random() * GreetingService.WHALES.length);
    return GreetingService.WHALES[index];
  }
}
