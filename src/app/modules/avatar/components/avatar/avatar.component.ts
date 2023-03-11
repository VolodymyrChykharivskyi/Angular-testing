import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
})
export class AvatarComponent implements OnInit {
    public ngOnInit() {
        console.log('AvatarComponent');
    }
}
