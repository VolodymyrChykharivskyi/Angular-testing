import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNameComponent } from './components/user-name/user-name.component';

@NgModule({
    declarations: [UserNameComponent],
    imports: [CommonModule],
    exports: [UserNameComponent],
})
export class UserModule {}
