import { AppComponent } from './app.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;
    const createComponent = createComponentFactory({ component: AppComponent });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create the app', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render title', () => {
        const title = spectator.query('.content span')?.textContent;

        expect(title).toBe('angular-testing app is running!');
    });
});
