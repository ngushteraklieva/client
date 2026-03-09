import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/select';
import { Router } from '@angular/router';
import { AccountService } from '../../../core/services/account.service';
import { SnackbarService } from '../../../core/services/snackbar.service';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    MatCard,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private fb = inject(FormBuilder)
  private accountService = inject(AccountService)
  private router = inject(Router)
  private snack = inject(SnackbarService)

  
  registerForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    password: [''],
  })

  onSubmit(){
    this.accountService.register(this.registerForm.value).subscribe({
      next: () => {
        this.snack.success("Registration successful")
        this.router.navigateByUrl('account/login')
      }
    })
  }
}
