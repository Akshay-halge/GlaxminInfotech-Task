import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-itemlists',
  templateUrl: './itemlists.component.html',
  styleUrls: ['./itemlists.component.scss']
})
export class ItemlistsComponent implements OnInit {

  firstlistItems: Todo[] = [];  // Original List
  secondlistItems: Todo[] = [];  // Transferred List
  originalListItems: Todo[] = []; // To store original data for reset


  constructor(private router:Router, private mainService:MainService){
    // this.mainService.getTodos().subscribe(res => {
    //   console.log(res)
    //   //this.firstlistItems = res;
    // })
  }
  ngOnInit(): void {
    this.getTodosItems()
  }

  getTodosItems(){
    this.mainService.getTodos().subscribe(res => {
      console.log(res)
      this.firstlistItems = res.todos.slice(0,10);
      this.originalListItems = [...this.firstlistItems];
    })
  }

  goBack() {
    this.router.navigate(['/counter']); // Navigates to back
  }

  goToEmicalculator() {
    this.router.navigate(['/emicalculator']); // Navigates to Next
  }

  transferItem(index: number) {
    this.secondlistItems.push(this.firstlistItems[index]);
    this.firstlistItems.splice(index, 1);
  }

  transferAll() {
    this.secondlistItems.push(...this.firstlistItems);
    this.firstlistItems = [];
  }

  reverseItem(index: number) {
    this.firstlistItems.push(this.secondlistItems[index]);
    this.secondlistItems.splice(index, 1);
  }

  reverseAll() {
    this.firstlistItems.push(...this.secondlistItems); // Move all items back
    this.secondlistItems = []; // Clear second list
  }
  

  resetAll() {
    this.firstlistItems = [...this.originalListItems]; // Restore original data
    this.secondlistItems = [];
  }



}
