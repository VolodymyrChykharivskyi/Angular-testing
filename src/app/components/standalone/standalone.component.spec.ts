import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { StandaloneComponent } from './standalone.component';
import { MockModule } from 'ng-mocks';

import { SettingsModule } from '../../modules/settings/settings.module';
import { ProfileModule } from '../../modules/profile/profile.module';

describe('StandaloneComponent with mock imports', () => {
    let spectator: Spectator<StandaloneComponent>;

    const createComponent = createComponentFactory({
        component: StandaloneComponent,
        imports: [MockModule(SettingsModule), MockModule(ProfileModule)],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});

describe('StandaloneComponent with overrideComponents', () => {
    let spectator: Spectator<StandaloneComponent>;

    const createComponent = createComponentFactory({
        component: StandaloneComponent,
        overrideComponents: [
            [
                StandaloneComponent,
                {
                    remove: { imports: [SettingsModule] },
                    add: { imports: [MockModule(SettingsModule)] },
                },
            ],
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
