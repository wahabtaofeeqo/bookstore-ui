import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { DetailsComponent } from './pages/details/details.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BookEffects } from './store/effects/book.effects';
import { reducers } from './store';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { AppInterceptor } from './interceptors/app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DetailsComponent,
    LoginComponent,
    RegisterComponent,
    AddBookComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([BookEffects])
  ],
  providers: [
    {
      multi: true,
      useClass: AppInterceptor,
      provide: HTTP_INTERCEPTORS,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
