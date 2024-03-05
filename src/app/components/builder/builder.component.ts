import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FormioForm } from '@formio/angular';
import builder_option from './builder_option';

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.css'
})
export class BuilderComponent {
  public form!: FormioForm;
  public builderOption!: {};

  constructor() {
    this.form = {
      title: '',
      components: []
    };

    this.builderOption = builder_option;
  }

  onChange(event:any): void {
    if(event.type === 'addComponent')
    {
      setTimeout(() => {
        const els = document.querySelectorAll(
          'div[style*="background-color: rgba(0, 0, 0, 0.5)"]'
        );
        els.forEach((e) => {
          e.remove();
        });
      }, 2000);
  
      setTimeout(() => {
          const els = document.querySelectorAll(
              'div[style*="z-index: 999999999"]'
          );
          els.forEach((e) => {
              e.remove();
          });
      }, 2000);
    }
  }

  onSaveForm() {
    let existingData = localStorage.getItem('FormsJson');

    if (existingData === null) {
      localStorage.setItem('FormsJson', JSON.stringify([this.form]));
    }

    else {
      let formsJson = JSON.parse(existingData);
      let alradyExistForm: boolean = false;
      let alradyExistFormIndex: number = -1;

      formsJson.forEach((form: FormioForm, index: number) => {
        if (form.title === this.form.title) {
          alradyExistForm = true;
          alradyExistFormIndex = index;
        }
      });

      if (alradyExistForm) {
        formsJson[alradyExistFormIndex] = this.form;
      }
      else {
        formsJson.push(this.form);
      }
      localStorage.setItem('FormsJson', JSON.stringify(formsJson));
    }

  }
}
