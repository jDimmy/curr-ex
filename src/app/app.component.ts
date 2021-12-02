import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'curr-ex';

  val1 : number = 0.24;
  val2 : number = 0.24;
  conv : number = 0;
  credit : number = 0
  currentName : string[] = ['AED', 'AOA', 'ARS', 'AUD', 'AZN', 'BAM', 'BHD', 'BIF', 'BRL', 'CHF', 'CNY', 'EGP', 'ETB', 'EUR', 'JPY', 'USD', 'XAF'];
  currentValueArray : number[] = [0.24, 0.0016, 0.0087, 0.63, 0.52, 0.51, 2.34, 0.00044, 0.16, 0.96, 0.14, 0.056, 0.018, 1, 0.0078, 0.88, 0.0015];
  cur1 : string = 'AED';
  cur2 : string = 'AED';

  ngOnInit() {

  }

  changeCurrency1(e : Event){
    this.cur1 = (<HTMLInputElement> e.target).value;
    for (let index = 0; index < this.currentName.length; index++) {
      if (this.cur1 == this.currentName[index]) {
        this.val1 = this.currentValueArray[index];
        break;
      }
      
    }
    this.credit = (this.val1 / this.val2) * this.conv;
  }

  changeCurrency2(e : Event){
    this.cur2 = (<HTMLInputElement> e.target).value;
    for (let index = 0; index < this.currentName.length; index++) {
      if (this.cur2 == this.currentName[index]) {
        this.val2 = this.currentValueArray[index];
        break;
      }
      
    }
    this.credit = (this.val1 / this.val2) * this.conv;
  }

  onKey(event: KeyboardEvent){
    this.conv = parseFloat((<HTMLInputElement> event.target).value);
    this.credit = (this.val1 / this.val2) * this.conv;
  }

  autoUpdate($scope : any){
  }

}
