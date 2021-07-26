import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Confirmation } from '../data/confirmation.model';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  formData?: Confirmation = new Confirmation();

  constructor(private firestore: AngularFirestore) {}

  getAttendant(){
    return this.firestore.collection('confirmation').snapshotChanges();
  }
}
