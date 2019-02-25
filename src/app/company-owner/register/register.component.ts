import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyOwnerService } from '../service/company-owner.service';

// @ts-ignore
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  ,providers:[CompanyOwnerService]
})
export class RegisterComponent implements OnInit {

  
  registerForm: FormGroup;
  isValidFormSubmitted = false;
 submitted = false;

 constructor(private router:Router, private formbuilder:FormBuilder,private userService:CompanyOwnerService) { }

 ngOnInit() {

   this.registerForm=this.formbuilder.group({
     userName:['',Validators.compose([ Validators.required,Validators.minLength(4)])],
     password:['',Validators.compose([ Validators.required,Validators.minLength(4)])],
     // repassword:['',Validators.required],
     firstName:['',Validators.compose([ Validators.required,Validators.minLength(4)])],
     middleName:['',Validators.compose([ Validators.required,Validators.minLength(4)])],
     lastName:['',Validators.compose([ Validators.required,Validators.minLength(4)])],
     phoneHome:['',Validators.compose([ Validators.required])],
     email:['',Validators.email],
     phoneOffice:['',Validators.compose([ Validators.required])],
     
     phoneMobile:['',Validators.compose([ Validators.required])],
     
     address:this.formbuilder.group({

         address1:['',Validators.compose([ Validators.required])],
         address2:['',Validators.compose([ Validators.required])],
         city:['',Validators.compose([ Validators.required])],
         state:['',Validators.compose([ Validators.required])],
         zip1:['',Validators.compose([ Validators.required])],
         zip2:['',Validators.compose([ Validators.required])]

      

       }),
     company:this.formbuilder.group({
         name:['',Validators.compose([ Validators.required])],
         ein:['',Validators.compose([ Validators.required])],
         stateRegNo:['',Validators.compose([ Validators.required])],
         noOfUnits:['',Validators.compose([ Validators.required])],
         address:this.formbuilder.group({
           address1:['',Validators.compose([ Validators.required])],
           address2:['',Validators.compose([ Validators.required])],
           city:['',Validators.compose([ Validators.required])],
           state:['',Validators.compose([ Validators.required])],
           zip1:['',Validators.compose([ Validators.required])],
           zip2:['',Validators.compose([ Validators.required])]
         })
       })
     
   });
 }

 onSubmit(){

   console.log(this.registerForm.value);
   this.submitted = true;


 
   this.createCompanyOwner();


 }
 
 createCompanyOwner()
 {

   this.userService.addCompanyOwner(this.registerForm.value)
   .subscribe(data=>{
     alert("user register successfully");
     console.log(data);
      //this.router.navigateByUrl('login')
     this.reloadPage();
   },err=>{
         console.log(err);
         alert("problem");
   }
   
   )
 }
  reloadPage() {
    window.location.reload();
  }

}
