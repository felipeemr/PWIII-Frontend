import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEditoraComponent } from './lista-editora/lista-editora.component';
import { NovoEditoraComponent } from './novo-editora/novo-editora.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEditoraComponent,
    NovoEditoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
