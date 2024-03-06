import { Component } from "@angular/core";
import dataSource from "./dataSource";
import { NgFor } from "@angular/common";

@Component({
    selector:'emp-tab',
    templateUrl:'./emp-tab.component.html',
    standalone:true,
    imports:[NgFor]
})
export class EmpTab{
    public data:any;

    constructor(){
       this.data = dataSource;
    }
}