import { Component } from '@angular/core';

import { SettingsModule } from '../../modules/settings/settings.module';
import { AvatarModule } from '../../modules/avatar/avatar.module';
import { ProfileModule } from '../../modules/profile/profile.module';

@Component({
    selector: 'app-standalone',
    standalone: true,
    imports: [SettingsModule, ProfileModule, AvatarModule],
    templateUrl: './standalone.component.html',
})
export class StandaloneComponent {}
