import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { TaskItemComponent } from './task/task-item/task-item.component';
import { ItemComponent } from './item/item.component';
import { ChangeStylesButtonComponent } from './change-styles-button/change-styles-button.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TaskComponent,
    TaskItemComponent,
    ItemComponent,
    ChangeStylesButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
