import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  public hero = {
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    valid: false
  };

  public EmailValidationMessage = 'Email is required';
  public ConfirmPasswordValidationMessage = 'Confirm Password is required'

  constructor() { 
    
  }

  public validateEmail(){
      const email = this.hero.email;
      if(email == ''){
        this.EmailValidationMessage = 'Email is Required';
        return false;
      }

      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if(!validEmail){
        this.EmailValidationMessage = 'Email must be valid';
      }
      else{
        this.EmailValidationMessage = '';
      }
      this.validateForm();
      return validEmail;

  }

  public validateConfirmPassword(){
    const password = this.hero.password;
    const confirmpassword = this.hero.confirmpassword;

    if(confirmpassword == ''){
      this.ConfirmPasswordValidationMessage = 'Confirm Password is Required';
      return false;
    }


    if( confirmpassword == password){
      this.ConfirmPasswordValidationMessage = '';
      this.validateForm();
      return true;
    }
    this.ConfirmPasswordValidationMessage = 'Password and Confirm Password must match';
    this.validateForm();
    return false;
}

public validateForm(){
   let error = 0;
   if(this.hero.username == ''){
      error += 1;
   }
   const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.hero.email);
   if(!validEmail){
     error += 1;
   }
   if(this.hero.password == ''){
     error += 1;
   }
   if(this.hero.password != this.hero.confirmpassword){
     error += 1;
   }
   if(error > 0){
     return false;
   }
   this.hero.valid = true;
   return true;
}


  ngOnInit() {
      this.hero.username = '';
      this.hero.email = '';
      this.hero.password = '';
      this.hero.confirmpassword = '';
      this.hero.valid = false;
  }

}
