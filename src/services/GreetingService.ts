/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

export class GreetingService {
  private readonly cats: string[];

  constructor() {
    this.cats = [
      "(≈චᆽච≈)",
      "(=◕ᆽ◕ฺ=)",
      "(≈ㅇᆽㅇ≈)♡",
      "(=චﻌච=)",
      "(=✖ᆽ✖=)",
      "(=✪ᆽ✪=)"
    ];
  }

  sayHello(name?: string): string {
    return `Hello ${name || "World"}!! ${this.getRandomCat()}`;
  }

  private getRandomCat() {
    const index = Math.floor(Math.random() * this.cats.length);
    return this.cats[index];
  }
}
