import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    constructor() {}

    public getTitle(name: string): string {
      return `Welcome ${name}`
    }
}
