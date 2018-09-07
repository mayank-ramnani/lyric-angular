import { Component } from '@angular/core';
import { GetDataService } from './get-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../bootstrap.min.css']
})
export class AppComponent {
  constructor(private dataService: GetDataService) {}
  inputText: string ;
  result: Object;

  getData() {
    this.dataService.console_print(this.inputText); // console printing
    this.dataService.console_http(this.inputText).subscribe(data => {
      this.result = data.response.hits;
      console.log(this.result);
    });
    // api call and console logging, observable returned, subscribed to it and then assigned the data to a result variable
    // data is in result, check it and show it
  }
}
