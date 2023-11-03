import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { StoreModule } from '@ngrx/store';
// import { cartReducer } from './shared/store/reducers/cart.reducer';
import { tutorialReducer } from './shared/store/reducers/tutorial.reducer';
import { ReadComponent } from './shared/components/read/read.component';
import { CreateComponent } from './shared/components/create/create.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, ReadComponent, CreateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      // cart: cartReducer,
      tutorial: tutorialReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
