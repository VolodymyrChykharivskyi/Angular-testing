import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModule } from '../user/user.module';
import { AvatarModule } from '../avatar/avatar.module';

import { SettingsListComponent } from './components/settings-list/settings-list.component';

@NgModule({
    declarations: [SettingsListComponent],
    imports: [CommonModule, UserModule, AvatarModule],
    exports: [SettingsListComponent],
})
export class SettingsModule {}
