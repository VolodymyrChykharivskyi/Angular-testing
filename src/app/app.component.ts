import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    public readonly title = this.userService.getTitle('John');

    constructor(private readonly userService: UserService) {}
}
