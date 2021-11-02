import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  constructor(public objCrus:CrudService) { }

  ngOnInit(): void {
  }

  public async pressbtn(){
    (await this.objCrus.HttpGet('https://manos-maestras.herokuapp.com/api/v2/proveedor')).subscribe((response:any) => {
      console.log(response);
    })
  }
}
