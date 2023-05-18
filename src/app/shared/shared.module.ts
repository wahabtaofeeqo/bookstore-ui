import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReviewComponent } from './review/review.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    SocialComponent,
    NavbarComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SocialComponent,
    FooterComponent,
    NavbarComponent,
    ReviewComponent
  ]
})
export class SharedModule { }
