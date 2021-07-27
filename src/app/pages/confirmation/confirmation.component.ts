import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService } from 'src/app/core/service/confirmation.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {

  confirm: string[] = ['Hadir', 'Optional', 'Tidak Hadir'];

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    public confirmationService: ConfirmationService,
    private firestore: AngularFirestore,
  ) {}

  ngOnInit(): void {
    this.spinnerShown();
    this.resetForm();
  }

  spinnerShown(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  whatsappHyperlink() {
    window.location.href = 'https://bit.ly/3rzKugI';
  }

  resetForm(form?: NgForm) {
    if (form != null)
      this.confirmationService.formData = {
        id: null as any,
        name: '',
        messages: '',
        isPresent: '',
      };
  }

  onSubmit(form: NgForm) {
    let data = form.value;
    this.firestore.collection('confirmation').add(data);
    this.resetForm(form);
    Swal.fire('Thank you..', 'Your Messages has been sent!', 'success');
  }
}
