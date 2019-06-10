import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msgs: Message[] = [];
  token: any;
  register: boolean = true;
  loginForm: FormGroup;
  registerForm:FormGroup;
  constructor(private fb:FormBuilder,private router: Router,private messageService: MessageService) {
    this.loginForm = fb.group({
			username: ['', Validators.required],
			password: ['', [Validators.required]],
    });
   }

  ngOnInit() {
  }

  loginFormClick() {
     let userName = this.loginForm.value.username;
     let passWord = this.loginForm.value.password;
     // login successful if there's a user available in the response
     if (userName == null || passWord == null || userName == "" || passWord == "") {
       this.messageService.add({ severity: 'error', summary: 'User', detail: 'Please fill all the fields' });
       return;
     }
     let userExist = false;
     let users = [{ username: "Test",password : "pass"}];
      for (var i = 0; i < users.length; i++) {
       if (users[i].username == userName && users[i].password == passWord) {
          userExist = true;
          break;
       }
      }
     if (!userExist) {
       this.messageService.add({ severity: 'error', summary: 'User', detail: 'User ' + userName + ' invalid user credentials' });
       return;
     } 
     this.router.navigateByUrl('/home');
   }

   cancel(){
     this.loginForm.reset();
   }

}
