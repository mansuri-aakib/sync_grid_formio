import { Component, inject } from "@angular/core";
import { GridModule, RowSelectEventArgs, SelectionSettingsModel } from "@syncfusion/ej2-angular-grids";
import { HttpClient } from "@angular/common/http";

@Component({
    selector:'sync-grid_old',
    templateUrl:'./sync-grid.component.html',
    standalone:true,
    imports:[GridModule]
})
export class SyncGrid {
    /**
     * Optional property that defines the selection options for a component.
     * It specifies the mode and type of selection to be used.
     * Default mode is 'Row' and type is 'Single'.
    */
    public selectionOptions?: SelectionSettingsModel = { mode: 'Row',  type: 'Single' };
    public data:any;
    public client:HttpClient = inject(HttpClient);
    public url='https://dummyjson.com/products';

    // API request 
    constructor(){
        this.client.get(this.url).subscribe((res:any)=>{
            this.data=res.products
        });
    }
    
    rowSelected(args: RowSelectEventArgs): void {
        alert(`selected data: ${JSON.stringify(args.data)}`);
    }
}
