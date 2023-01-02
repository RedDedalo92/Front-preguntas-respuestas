import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pregunta } from 'src/app/models/pregunta';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./paso-dos.component.css']
})
export class PasoDosComponent implements OnInit {
  tituloCuestionario: string;
  descripcionCuestionario: string;
  listPreguntas: Pregunta[] = [];

  constructor(private cuestionarioService: CuestionarioService, 
    private toastr: ToastrService, private router: Router) { 
    this.tituloCuestionario = cuestionarioService.tituloCuestionario;
    this.descripcionCuestionario = cuestionarioService.descripcionCuestionario;
  }

  ngOnInit(): void {
  }

}
