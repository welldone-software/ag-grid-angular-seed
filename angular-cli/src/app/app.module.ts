import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AgGridModule} from "ag-grid-angular/main";

import { AppComponent } from './app.component';
import { ThemedAgGridComponent } from './themed-ag-grid/themed-ag-grid.component';
import { RedComponentComponent } from './red-component/red-component.component';

@NgModule({
    declarations: [AppComponent, ThemedAgGridComponent, RedComponentComponent],
    imports: [BrowserAnimationsModule, BrowserModule, AgGridModule.withComponents([RedComponentComponent])],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
