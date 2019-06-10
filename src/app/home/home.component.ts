import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  patientDetails :any ;
  constructor(public configService : ConfigService,private modalService: NgbModal) { }
  ngOnInit() {
    this.configService.getUserDetails().then(data=>{
      console.log("getting data from JSON./...",data);
      this.patientDetails = data;
    })
  }
  editPopup(ticketsPaymentspopup){
    this.modalService.open(ticketsPaymentspopup , { windowClass : "paymentsCustomModalClass" , size:'sm' });//To add custom class on modal window
  }
}
