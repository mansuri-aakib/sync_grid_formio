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
    public data:any;
    public selectionOptions?: SelectionSettingsModel = { mode: 'Row',  type: 'Single' };
    public client:HttpClient = inject(HttpClient);
    public url='https://dummyjson.com/products';

    constructor(){
        this.client.get(this.url).subscribe((res:any)=>{
            this.data=res.products
        });
    }
    
    rowSelected(args: RowSelectEventArgs): void {
        alert(`selected data: ${JSON.stringify(args.data)}`);
    }
}
