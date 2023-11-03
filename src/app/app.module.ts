import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { StoreModule } from '@ngrx/store';
import { ReadComponent } from './shared/components/tutorial/read/read.component';
import { CreateComponent } from './shared/components/tutorial/create/create.component';
import { rootReducer } from './shared/store/reducers';

@NgModule({
  declarations: [AppComponent, ButtonComponent, ReadComponent, CreateComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot(rootReducer)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
