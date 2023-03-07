import { Spectator, createComponentFactory, byText } from '@ngneat/spectator';

import { AppComponent } from './app.component';
import { MockComponents } from 'ng-mocks';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { TemplateCardComponent } from './components/template-card/template-card.component';

describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;

    describe('testing component with ng-content', () => {
        const createComponent = createComponentFactory({
            component: AppComponent,
            declarations: [MockComponents(ContentCardComponent)],
        });

        beforeEach(() => {
            spectator = createComponent();
        });

        it('should render card component', () => {
            expect(spectator.query(ContentCardComponent)).withContext('should render card').toExist();
            expect(spectator.query('.content-title')).withContext('should render title').toHaveText('Title');
        });
    });

    describe('testing component with ng-template', () => {
        const createComponent = createComponentFactory({
            component: AppComponent,
            declarations: [TemplateCardComponent],
        });

        beforeEach(() => {
            spectator = createComponent();
        });

        it('should render card component', () => {
            expect(spectator.query(TemplateCardComponent)).withContext('should render card').toExist();
            expect(spectator.query('.template-title')).withContext('should render title').toHaveText('Title');
        });
    });
});







