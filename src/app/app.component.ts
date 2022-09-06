import { Component } from '@angular/core';
import { EmpleadoInterface } from './models/empleado.interface.ts';
import { Empleados } from './database/empleados.json';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isSelected: boolean = false;
  labelbtn: string = 'Agregar';
  empleados: EmpleadoInterface[] = Empleados;
  selectedEmp: EmpleadoInterface = {};

  agregar() {
    if (!this.isSelected) {
      this.selectedEmp.id = this.empleados.length + 1;
      this.empleados.push(this.selectedEmp);
      Empleados.push(this.selectedEmp);
    }
    this.labelbtn = 'Agregar';
    this.selectedEmp = {};
    this.isSelected = false;
  }
  selectEmpleado(empleado: EmpleadoInterface) {
    this.selectedEmp = empleado;
    this.labelbtn = 'Editar';
    this.isSelected = true;
  }
  delete() {
    this.empleados = this.empleados.filter((x) => x != this.selectedEmp);
    this.selectedEmp = {};
  }
}
