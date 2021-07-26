import { Component, OnInit } from '@angular/core';
import { Confirmation } from 'src/app/core/data/confirmation.model';
import { ConfirmationService } from 'src/app/core/service/confirmation.service';

@Component({
  selector: 'app-confirmation-list',
  templateUrl: './confirmation-list.component.html',
  styleUrls: ['./confirmation-list.component.css'],
})
export class ConfirmationListComponent implements OnInit {

  attendance: Confirmation[] = [];

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.getAttendantData()
  }

  getAttendantData() {
    this.confirmationService.getAttendant().subscribe(data => {
      this.attendance = data.map(item => {
        console.log(item.payload.doc.data());
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() as {}
        } 
      })
    })
  }


}
