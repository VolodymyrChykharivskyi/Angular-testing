import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-name',
    templateUrl: './user-name.component.html',
})
export class UserNameComponent implements OnInit {
    public readonly name = 'John';

    public ngOnInit() {
        console.log('UserNameComponent');
    }
}
