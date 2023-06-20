import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[MaiorIdadeValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaiorIdadeDirective,
    multi: true
  }]
})
export class MaiorIdadeDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const datanasc = control.value;
    const anonasc = new Date(datanasc).getFullYear();
    const idadeAtual = anonasc + 18;;
    const atual = new Date().getFullYear();

    const result = idadeAtual <= atual;
    return result ? null : {'maiorIdadeValidator': true};
    
  }
  

}
