import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'reactive_forms';
  formulario = new FormGroup({
    nombre_completo: new FormControl('',Validators.required),
    curp: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    paterno: new FormControl('',Validators.required),
    materno: new FormControl('',Validators.required),
    telefono: new FormControl('',Validators.required),
    celular: new FormControl('',Validators.required),
    correo: new FormControl('',Validators.required)
    
  });
  
}
