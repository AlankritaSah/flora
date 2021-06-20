import { Component, OnInit , Input} from '@angular/core';
// import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }
onClick(){
  alert("Confirmed");
}
}
