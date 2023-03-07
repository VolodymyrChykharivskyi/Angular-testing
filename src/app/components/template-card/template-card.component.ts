import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-template-card',
    templateUrl: './template-card.component.html',
})
export class TemplateCardComponent {
    @ContentChild('title') public titleRef!: TemplateRef<null>;
}
