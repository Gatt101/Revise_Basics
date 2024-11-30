import { CurrencyPipe, DatePipe, LowerCasePipe, NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { AppendPipe } from './pipes/append.pipe';
import { DataService } from './services/data.service';
import { Data } from './interfaces/data';
import { response } from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,FormsModule,NgClass,NgStyle,NgIf,NgFor,MatListModule,NgSwitch,NgSwitchCase,NgSwitchDefault
    ,LowerCasePipe,UpperCasePipe,PercentPipe,PercentPipe,DatePipe,CurrencyPipe, AppendPipe],
  providers:[DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TODO';
//   // one -way binding {{}}
//   mybtn:String ="Hello world"
//   counter = 0;

// // attribute binding [] = ""
//   isDisabled = true;

//   // style binding
//   bgColor:String = "green"
//   myColor = "blue"

//   // class binding
//   redText = "abcd"

//   // function binding
//   inccounter(){
//     this.counter++;
//   }

//   // two -way binding using ngModel
//   inputText = "Intial value"

//   // Using ngClass
//   message = "This is dangerous file"
//   classes =  "danger text-size"

//   // using ngStyle
//   selectedColor = "red"

//   //using  ngIf and ngTemplate
//   isLoggedIn:boolean = false;
//   username:string="gaurav"

// // using ngFor
//   names:String[] = ["gaurav","moti","rohan"]
//   trackByFn(index: number, item: string): string {
//     return item; // or some unique identifier
//   }

  // using ngSwitchCase
  // grade = "X";

// using @if 
  // a =50;
  // b =3;

  // using @for and @switch
  // items = [
  //   {id:1,name:"Gaurav"},
  //   {id:2,name:"Moti"},
  // ]

  // // using pipes 
  // word = "Good Morning!!"
  // // date:Date =new Date();
  // today = Date.now();

  // curr = 45.234748;


  // dependency injection
    age = 0
    payemnt = 0;
    post: Data[] = [];

    constructor(private dataService:DataService) {
      // this.age = this.dataService.age;
      // this.payemnt = this.dataService.payment;
      
    }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.dataService.getPosts().subscribe({
        next : (response: Data[]) => {
          this.post = response;
        },
        error : (error: Error) => {
          console.log(error);
        }
      })
    }
    
}
