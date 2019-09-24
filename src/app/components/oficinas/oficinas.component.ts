import { Component, OnInit } from '@angular/core';
import { ConectionsService } from 'src/app/services/conections.service';
import { UsuariosDataService } from 'src/app/services/usuarios-data.service';
import { OficinasDataService } from './../../services/oficinas-data.service';

@Component({
  selector: 'app-oficinas',
  templateUrl: './oficinas.component.html',
  styleUrls: ['./oficinas.component.scss']
})
export class OficinasComponent implements OnInit {

  nombreCrear: string = "";
  listaUsuarios: any[] = [];
  usuarioAgregarId;
  oficinaId;

  editarPack = {
    id: 0,
    nombre: ""
  }

  constructor(
    private conections: ConectionsService,
    public usuarios: UsuariosDataService,
    public oficinas: OficinasDataService 
  ) { 
    this.conections.kickToHome(1);
    this.conections.kickToHome(0);
  }

  ngOnInit() {
    this.conections.getOficinas();
    this.conections.getUsuarios('users');
  }

  crearOficina = () => {
    this.conections.sendOficina(this.nombreCrear);
  }

  toEditar = (oficina) => {
    this.editarPack = {
      id: oficina.id,
      nombre: oficina.nombre
    }
  }

  cambiarNombre = () => {
    this.conections.cambiarNombreOficina(this.editarPack.id, this.editarPack.nombre)
  }

  agregarUsuario = () => {
    if (this.usuarioAgregarId && this.oficinaId) {
      this.conections.insertUsuarioOficina(this.oficinaId, this.usuarioAgregarId);
    }
  }

  quitarUsuario = (ofId, usId) => {
    this.conections.quitarUsuarioOficina(ofId, usId);
  }

  filtrarUsuarios = (oficina) => {
    this.oficinaId = oficina.id;
    this.listaUsuarios = this.usuarios.usuarios.filter(usuario => {
      if (oficina.usuarios.find(usr => usr.id == usuario.id) || usuario.type != 0) {
        return false
      } else { return true }
    });
  }



}
