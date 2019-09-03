import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidade/usuario';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'app-salvar-usuario',
  templateUrl: './salvar-usuario.page.html',
  styleUrls: ['./salvar-usuario.page.scss'],
  providers : [AngularFireAuth],
})
export class SalvarUsuarioPage implements OnInit {

  usuario: Usuario = new Usuario();


  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() { }

  salvar(){
  this.afAuth.auth.createUserWithEmailAndPassword(this.usuario.email, this.usuario.senha).then(
  () => { this.router.navigate(['salvar-musica']); }
  ).catch( (erro) => console.log(erro) );
  }

}
