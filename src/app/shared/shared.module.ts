import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './components/buttons/login-button.component';
import { LogoutButtonComponent } from './components/buttons/logout-button.component';

@NgModule({
  declarations: [LoginButtonComponent, LogoutButtonComponent],
  imports: [CommonModule],
  exports: [LoginButtonComponent, LogoutButtonComponent],
})
export class SharedModule {}
