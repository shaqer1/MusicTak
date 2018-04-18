import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent {
  userForm: FormGroup;
  signupForm: FormGroup;
  newUser: boolean = false;
  constructor(private fb: FormBuilder, public auth: AuthService) { }

  ngOnInit(): void {
     this.buildForm();
   }

   signup(): void {
     this.auth.emailSignUp(this.signupForm.value)
   }

   login(): void {
     console.log('here');
     this.auth.emailLogin(this.userForm.value)
   }
   toggleForm(): void {
     this.newUser = !this.newUser;
   }


   /*resetPassword() {
     this.auth.resetPassword(this.userForm.value['email'])
     .then(() => this.passReset = true)
   }*/

   buildForm(): void {
     this.userForm = this.fb.group({
       'email': ['', [
           Validators.required,
           Validators.email
         ]
       ],
       'password': ['', [
         Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
         Validators.minLength(6),
         Validators.maxLength(25)
       ]
     ],
     });

     this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
     this.onValueChanged(); // reset validation messages

     this.signupForm = this.fb.group({
       'displayName': ['', [
           Validators.required
         ]
       ],
       'photoURL': ['', []
       ],
       'email': ['', [
           Validators.required,
           Validators.email
         ]
       ],
       'password': ['', [
         Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
         Validators.minLength(6),
         Validators.maxLength(25)
       ]
     ],
     });

     this.signupForm.valueChanges.subscribe(data => this.onValueChanged(data));
     this.onValueChanged();
   }

   // Updates validation state on form changes.
   onValueChanged(data?: any) {
     if (!this.userForm) { return; }
     const form = this.userForm;
     for (const field in this.formErrors) {
       // clear previous error message (if any)
       this.formErrors[field] = '';
       const control = form.get(field);
       if (control && control.dirty && !control.valid) {
         const messages = this.validationMessages[field];
         for (const key in control.errors) {
           this.formErrors[field] += messages[key] + ' ';
         }
       }
     }
   }

  formErrors = {
     'email': '',
     'password': ''
   };

   validationMessages = {
     'email': {
       'required':      'Email is required.',
       'email':         'Email must be a valid email'
     },
     'password': {
       'required':      'Password is required.',
       'pattern':       'Password must be include at one letter and one number.',
       'minlength':     'Password must be at least 4 characters long.',
       'maxlength':     'Password cannot be more than 40 characters long.',
     }
   };

}
