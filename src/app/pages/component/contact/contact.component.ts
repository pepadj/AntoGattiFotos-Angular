import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  forma: FormGroup;
  submitted = false;

  get f() { return this.forma.controls; }

  email: Object = {
    nombre: "",
    compania: "",
    message: ""
  }

  constructor(public _EmailService: EmailService) {

    this.initFormContact();
  }

  initFormContact() {
    this.forma = new FormGroup({

      'nombre': new FormControl('', Validators.required),
      'compania': new FormControl('', Validators.required),
      'message': new FormControl('', Validators.required)
    });

    this.forma.setValue(this.email);
  }

  SubmitContactForm() {

    console.log(this.forma);
    console.log(this.forma.value);

    this.submitted = true;

    // stop here if form is invalid
    if (this.forma.invalid) {
      return;
    }

    this._EmailService.sendMessage(this.forma.value).subscribe(() => {
      //Swal("Formulario de contacto, Mensaje enviado correctamente");
      Swal.fire({
        //position: 'top-end',
        type: 'success',
        title: 'Mensaje enviado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    });
    
    this.forma.controls['nombre'].reset();
    this.forma.controls['compania'].setValue("");
    this.forma.controls['message'].setValue("");
    
    this.forma.markAsPristine();
    this.forma.markAsUntouched();
    this.forma.updateValueAndValidity();

    this.submitted = false;
  }
}
