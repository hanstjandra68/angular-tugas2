import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  a="";
  b="";
  arrNama=[];
  ngOnInit() {
    
    var namaa=this.route.snapshot.paramMap.get('nama');
    this.arrNama=namaa;
    var penjelasann=this.route.snapshot.paramMap.get('penjelasan');
    
  }
  inputs(){
    this.namaa.push(this.a);
    
  }
}