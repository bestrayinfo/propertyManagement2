import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  submitted = false;
  @Input() loginType: any;

  constructor(private formBuilder:  FormBuilder, private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log(this.loginType);
    console.log(this.loginForm.value);

    if (this.loginType === 'companyOwner') {


      this.authService.attemptAuth(this.loginForm.value).subscribe(
        data => {
          this.tokenStorage.saveToken(data.token);
           this.tokenStorage.saveUsername(data.username);
          // this.tokenStorage.saveAuthorities(data.authorities);
          // localStorage.setItem('token',JSON.stringify(data.));


          console.log(data);
          // this.reloadPage();
        },
        error => {
          console.log(error);

        }
      );

    }
  }
    reloadPage() {
      window.location.reload();
    }
  }
