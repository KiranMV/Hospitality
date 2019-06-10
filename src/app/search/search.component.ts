import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { HomeComponent } from '../home/home.component';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // @ViewChild(HomeComponent) mdbTable :patient;
  searchText: string = '';
  previous: string;
  constructor() { }
  @HostListener('input') oninput() {
    this.searchItems();
  }
  ngOnInit() {
  }

  searchItems() {
    // const prev = this.mdbTable;
    // console.log(prev);
    // if (!this.searchText) {
    //   this.mdbTable.setPatientDetails(this.previous);
    //   this.elements = this.mdbTable.patientDetails();
    // }

    if (this.searchText) {

    }
  }
}
