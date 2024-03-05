import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink, RouterOutlet } from "@angular/router";
import { FormioModule } from "@formio/angular";

@NgModule({
    imports:[
        RouterOutlet,
        RouterLink,
        FormsModule,
        FormioModule,
        CommonModule
    ],
    exports:[
        RouterOutlet,
        RouterLink,
        FormsModule,
        FormioModule,
        CommonModule
    ]
})
export class SharedModule{}