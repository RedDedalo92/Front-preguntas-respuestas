import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cuestionario } from 'src/app/models/cuestionario';
import { Pregunta } from 'src/app/models/pregunta';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./paso-dos.component.css']
})
export class PasoDosComponent implements OnInit {
  tituloCuestionario!: string;
  descripcionCuestionario!: string;
  listPreguntas: Pregunta[] = [];
  loading = false;

  constructor(private cuestionarioService: CuestionarioService, 
    private toastr: ToastrService, private router: Router) { 
  }

  ngOnInit(): void {
    this.tituloCuestionario = this.cuestionarioService.tituloCuestionario;
    this.descripcionCuestionario = this.cuestionarioService.descripcionCuestionario;
  }

  guardarPregunta(pregunta: Pregunta): void{
    this.listPreguntas.push(pregunta);
    console.log(this.listPreguntas);
  }

  eliminarPregunta(index:number):void{
    this.listPreguntas.splice(index, 1);
  }

  guardarCuestionario(): void{
    const cuestionario: Cuestionario = {
      nombre: this.tituloCuestionario,
      descripcion: this.descripcionCuestionario,
      listPregunta: this.listPreguntas
    }
    this.loading = true;
    //Enviamos cuestionario al backend
    this.cuestionarioService.guardarCuestionario(cuestionario).subscribe(data =>{
      this.toastr.success('Cuestionario guardado exitosamente','Cuestionario registrado!');
      this.router.navigate(['/dashboard']);
      this.loading = false;
    }, error =>{
      this.toastr.error('Se ha producido un error y no se guardó el cuestionario','Error!');
      this.router.navigate(['/dashboard']);
      this.loading = false;
    });
  }
}
