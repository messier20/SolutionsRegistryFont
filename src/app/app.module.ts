import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { DisplayMethodsComponent } from './display-methods/display-methods.component';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {
  MatAutocompleteModule,
  MatInputModule,MatTableModule,
  MatButtonModule, MatTabsModule
} from '@angular/material';
import { TestingComponent } from './testing/testing.component';
import { DisplayHistoryLogComponent } from './display-history-log/display-history-log.component';
import { NavigationComponent } from './navigation/navigation.component';
import {CdkTableModule} from "@angular/cdk/table";
import { HistoryEntriesModificationsComponent } from './history-entries-modifications/history-entries-modifications.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayMethodsComponent,
    TestingComponent,
    DisplayHistoryLogComponent,
    NavigationComponent,
    HistoryEntriesModificationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatButtonModule,
    CdkTableModule,
    MatTableModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
