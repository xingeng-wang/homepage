import {NgModule} from '@angular/core';
import {NavbarComponent} from './navbar.component';
import {CommonModule} from '@angular/common';



@NgModule({
  imports: [CommonModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NarbarModule {
}
