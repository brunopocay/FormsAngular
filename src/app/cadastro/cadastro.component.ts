import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ConsultaCepService } from "../services/consulta-cep.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private service:ConsultaCepService) {}

  ngOnInit(): void {}

  cadastrar(form: any) {
    return form.valid ? this.router.navigate(['sucesso']) : alert('Formulário inválido');
  }

  consultaCEP(e: any, form: NgForm){
    const CEP = e.target.value;
    if(CEP != '')
    {
      this.service.getConsultaCep(CEP).subscribe(result => {
        this.populandoEndereco(result, form);
      })
    }
  }

  populandoEndereco(dados: any, form: NgForm){
    form.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    })
  }
  
  // formatarCEP(cep: string): string{
  //   cep = cep.replace(/\D/g, '');

  //   if(cep.length > 5){
  //     cep = cep.substring(0,5) + '-' + cep.substring(5);
  //   }

  //   return cep;
  // }
}
