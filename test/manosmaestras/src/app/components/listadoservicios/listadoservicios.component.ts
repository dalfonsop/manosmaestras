import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-listadoservicios',
  templateUrl: './listadoservicios.component.html',
  styleUrls: ['./listadoservicios.component.css']
})
export class ListadoserviciosComponent implements OnInit {

  constructor(public objCrus:CrudService) { }

  ngOnInit(): void {
  }

  public async pressbtn(){
    (await this.objCrus.HttpGet("https://minticunalgrupo6.herokuapp.com/api/v1/proveedor/")).subscribe((response:any) => {
      console.log(response);
    })
  }
}
