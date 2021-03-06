import { Component, OnInit } from '@angular/core';
import { ConectionsService } from 'src/app/services/conections.service';
import { CategoriasDataService } from 'src/app/services/categorias-data.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
})
export class CategoriasComponent implements OnInit {

  nombreCrearCat;
  nombreEditarCat;
  idEditarCat;
  nombreCrearSub;
  nombreEditarSub;
  idEditarSub;

  constructor(
    private conections: ConectionsService,
    public categoriasData: CategoriasDataService,
  ) { }

  ngOnInit() {
    this.conections.getCategorias();
    this.categoriasData.ventana = 1;
  }

  crearCategoria = () => {
    this.conections.sendCategoria(this.nombreCrearCat);
    this.nombreCrearCat = "";
  }

  editarCategoria = () => {
    this.conections.updateCategoria(this.nombreEditarCat, this.idEditarCat);
  }

  toEditarCat = (nombre, id) => {
    this.nombreEditarCat = nombre;
    this.idEditarCat = id;
  }

  limpiarSub = () => {
    this.nombreCrearSub = "";
  }

  crearSub = (id) => {
    this.conections.sendSubcategoria(this.nombreCrearSub, id);
    this.nombreCrearSub = "";
  }



}
