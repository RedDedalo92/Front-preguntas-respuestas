import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import {Usuario} from '../../../models/usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  login!: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, private loginService: LoginService) { 
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  log(): void{
    const usuario: Usuario = {
      nombreUsuario : this.login.value.usuario,
      password : this.login.value.password
    };

    this.loading = true;
    this.loginService.login(usuario).subscribe(data =>{
      console.log(data);
      this.loading = false;
    }, error =>{
      console.log(error);
      this.loading = false;
    })
    // setTimeout(() => {
    //   if (usuario.nombreUsuario === "mlatorre" && usuario.password === 'admin'){
    //     this.router.navigate(['/dashboard'])
    //   }else{
    //     this.toastr.error('Usuario o contraseña invalidos', 'Error')
    //   }
    //   this.loading = false;
    // }, 3000);

  }

}
