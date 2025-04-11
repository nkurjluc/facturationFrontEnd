import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule,CardModule, InputTextModule, FormsModule,PasswordModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None 
})
export class LoginComponent {
  username: String | undefined ;  
  password: string | undefined;
}
