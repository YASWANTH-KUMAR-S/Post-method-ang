import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
@Component({
  selector: 'app-numberinput',
  templateUrl: './numberinput.component.html',
  styleUrls: ['./numberinput.component.css']
})
export class NumberinputComponent {

 userNumber: number=0;
 dropdownOptions = ['Monthly', 'Weekly', 'Daily'];
  selectedOption!: string;

constructor(private http: HttpClient,private dataService: DataService) { }
//userNumber = 0;
onSubmit() {
  this.http.post('Amount Naraya kelu bro,8 lks package thanu', { number: this.userNumber }).subscribe(
    data => console.log(data),
    error => console.log(error)
  );
}

onDropdownChange() {
  this.dataService.sendDropdownValue(this.selectedOption).subscribe(response => {
    console.log(response); 
  });

}
}