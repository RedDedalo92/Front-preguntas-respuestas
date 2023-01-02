import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Pregunta } from 'src/app/models/pregunta';

@Component({
  selector: 'app-nueva-pregunta',
  templateUrl: './nueva-pregunta.component.html',
  styleUrls: ['./nueva-pregunta.component.css']
})
export class NuevaPreguntaComponent implements OnInit {
  nuevaPregunta: FormGroup;
  pregunta!: Pregunta;
  rtaCorrecta = 0;

  constructor(private fb: FormBuilder, private toastr: ToastrService) { 
    this.nuevaPregunta = this.fb.group({
      titulo: ['', Validators.required],
      respuestas: this.fb.array([])
    });
  }

  ngOnInit(): void {
  }

  get getRespuestas(): FormArray{
    return this.nuevaPregunta.get('respuestas') as FormArray
  }

  agregarRespuestas():void{
    this.getRespuestas.push(this.fb.group({
      descripcion:['', Validators.required],
      esCorrecta: 0
    }))
  }
}
