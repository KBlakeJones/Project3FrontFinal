import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { Warehouse1Component } from './warehouse1/warehouse1.component';
import { Warehouse2Component } from './warehouse2/warehouse2.component';
import { Warehouse3Component } from './warehouse3/warehouse3.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { AddItemComponent } from './add-item/add-item.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    Warehouse1Component,
    Warehouse2Component,
    Warehouse3Component,
    InventoryComponent,
    AboutComponent,
    AddItemComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }