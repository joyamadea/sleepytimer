import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.page.html',
  styleUrls: ['./change-name.page.scss'],
})
export class ChangeNamePage implements OnInit {
  hello: string = "hi";
  constructor() { }

  ngOnInit() {
    console.log(this.hello);
  }

  test(){
    // console.log(this.hello);
  }

  saveName(){
    console.log(this.hello);
  }

}
