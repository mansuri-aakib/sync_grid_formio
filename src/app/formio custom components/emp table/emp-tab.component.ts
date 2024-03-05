import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormioCustomComponent } from "../../fomio helper/elements.common";
import dataSource from "./dataSource";
import { NgFor } from "@angular/common";

@Component({
    selector:'emp-tab',
    templateUrl:'./emp-tab.component.html',
    standalone:true,
    imports:[NgFor]
})
export class EmpTab implements FormioCustomComponent<number>{
    public data:any;
    
    constructor(){
       this.data = dataSource;
    }

    @Input()
    value!: number;
  
    @Output()
    valueChange = new EventEmitter<number>();
  
    @Input()
    disabled!: boolean;
}