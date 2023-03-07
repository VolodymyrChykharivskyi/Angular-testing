import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateCardComponent } from './components/template-card/template-card.component';
import { ContentCardComponent } from './components/content-card/content-card.component';

@NgModule({
    declarations: [AppComponent, TemplateCardComponent, ContentCardComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
