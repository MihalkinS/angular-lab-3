import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { DataService } from './shared/data.service';

import { AppComponent } from './app.component';
import { MainFormComponent } from './main-form/main-form.component';
import { MainTableComponent } from './main-table/main-table.component';
import { TableRowComponent } from './table-row/table-row.component';
// import { ModalViewComponent } from './modal-view/modal-view.component';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    MainTableComponent,
    TableRowComponent,
    ConfirmComponent
    // ModalViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BootstrapModalModule
  ],
  entryComponents: [
    ConfirmComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
    
 }
