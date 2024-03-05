import { Component, EventEmitter, Input, Output } from "@angular/core";
import { GridModule, RowSelectEventArgs, SelectionSettingsModel } from "@syncfusion/ej2-angular-grids";
import dataSource from "./dataSource";
import { FormioCustomComponent } from "../../fomio helper/elements.common";

@Component({
    selector:'sync-grid_old',
    templateUrl:'./sync-grid.component.html',
    standalone:true,
    imports:[GridModule]
})
export class SyncGrid implements FormioCustomComponent<number>{
    public data = dataSource;
    public selectionOptions?: SelectionSettingsModel = { mode: 'Row',  type: 'Single' };

    @Input()
    value!: number;
  
    @Output()
    valueChange = new EventEmitter<number>();
  
    @Input()
    disabled!: boolean;

    rowSelected(args: RowSelectEventArgs): void {
        alert(`selected data: ${JSON.stringify(args.data)}`);
    }
}
