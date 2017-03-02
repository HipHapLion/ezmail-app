import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MailViewComponent } from './mail-view/mail-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarComponent, MailViewComponent]
})
export class MailViewModule { }
