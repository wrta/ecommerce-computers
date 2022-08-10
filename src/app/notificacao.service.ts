import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarrinhoService } from './carrinho.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private snackBar: MatSnackBar,
    private carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  notificar(mensagem: string){
    this.snackBar.open(mensagem, "OK",{
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center",
    })
  }

  
  comprar(){
    this.snackBar.open("Parabéns pela compra!", "X",{
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center",
    })
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }

}
