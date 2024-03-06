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
  public formTemplates!: FormioForm[];// Array containing form templates retrieved from localstorage.
  public selectedTemplate!: any;
  public submitedTemplate!: {};
  public isTemplateSelected: boolean = false;
  public isDataSubmited: boolean = false;

  //load data from local
  ngOnInit(): void {
    let existingData = localStorage.getItem('FormsJson');
    if (existingData !== null) {
      this.formTemplates = JSON.parse(existingData);
    }
  }

  /**
   * Renders the selected template based on the event value.
   * - If the value is -1, sets the isTemplateSelected flag to false.
   * - Otherwise, sets the isTemplateSelected flag to true, resets the isDataSubmited flag,
   *   and renders the selected template using Formio.createForm.
   * @param event The event object containing the target value.
  */
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
    // Removing Syncfusion premium dialog
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
  
  /**
   * Handles form submission.
   * - Sets the isDataSubmited flag to true.
   * - Stores the submitted form data.
   * @param formJson The JSON object containing the submitted form data.
   */
  onSubmitForm(formJson: any) {
    this.isDataSubmited = true;
    this.submitedTemplate = formJson.data;
  }

}
