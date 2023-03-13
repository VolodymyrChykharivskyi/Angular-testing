import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { AppComponent } from './app.component';
import { MockProvider } from 'ng-mocks';
import { UserService } from './services/user/user.service';

describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;
    const createComponent = createComponentFactory({
        component: AppComponent,
    });

    describe('when name is Adam', () => {
        const title = 'Welcome Adam!';

        beforeEach(() => {
            spectator = createComponent({
                providers: [MockProvider(UserService, { getTitle: (_name: string) => title })],
            });
        });

        it('should render title', () => {
            expect(spectator.query('h1')).toHaveExactText(title);
        });
    });

    describe('when name is Julia', () => {
        const title = 'Julia';

        beforeEach(() => {
            spectator = createComponent({
                providers: [MockProvider(UserService, { getTitle: (_name: string) => title })],
            });
        });

        it('should render title', () => {
            expect(spectator.query('h1')).toHaveExactText(title);
        });
    });
});
