import { Component, OnInit } from '@angular/core';
import { Formio, FormioForm } from '@formio/angular';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-renderer',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './renderer.component.html',
  styleUrl: './renderer.component.css'
})
export class RendererComponent implements OnInit {
  public formTemplates!: FormioForm[];
  public selectedTemplate!: any;
  public submitedTemplate!: {};
  public isTemplateSelected: boolean = false;
  public isDataSubmited: boolean = false;

  ngOnInit(): void {
    let existingData = localStorage.getItem('FormsJson');
    if (existingData !== null) {
      this.formTemplates = JSON.parse(existingData);
    }
  }

  renderTemplate(event: any) {
    if (event.target.value == -1) {
      this.isTemplateSelected = false;
    }
    else {
      this.isTemplateSelected = true;
      this.isDataSubmited = false;
      this.selectedTemplate = this.formTemplates[event.target.value];
      Formio.createForm(
        document.getElementById('formio'),
        this.selectedTemplate,
        {
          sanitize: true,
          sanitizeConfig: {
            allowedTags: ['sync-grid', 'emp-tab'],
            addTags: ['sync-grid', 'emp-tab']
          }
        }
      );
      this.onChange()
    }
  }

  onChange(): void {
    document
      .querySelectorAll(
        'div[style*="background-color: rgba(0, 0, 0, 0.5)"]'
      )
      .forEach((e) => {
        e.remove();
      });

    document
      .querySelectorAll(
        'div[style*="z-index: 999999999"]'
      )
      .forEach((e) => {
        e.remove();
      });

  }
  
  onSubmitForm(formJson: any) {
    this.isDataSubmited = true;
    this.submitedTemplate = formJson.data;
  }

}
