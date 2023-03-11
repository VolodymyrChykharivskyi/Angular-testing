import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-settings-list',
    templateUrl: './settings-list.component.html',
})
export class SettingsListComponent implements OnInit {
    public ngOnInit() {
        console.log('SettingsListComponent');
    }
}
