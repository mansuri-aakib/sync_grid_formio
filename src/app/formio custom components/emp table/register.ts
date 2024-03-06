import { Injector } from '@angular/core';
import { EmpTab } from './emp-tab.component';
import { createCustomElement } from '@angular/elements';
import { Components } from 'formiojs';

/*
  * Function creates and registers custom component.
  * called from parent/app component.
*/
export function registerEmpTableComponent(injector: Injector) {
  /*
    Use the following function to create and register custom element of custom component.
  */
  customElements.define('emp-tab', createCustomElement(EmpTab, { injector }));

  /*
    Use the following function to register custom component with the Formio.
  */
  Components.setComponent('emptab', createCustomFormioComponent());
}

/*
  * Dynamically creates a custom component.
  * @returns A custom component extending in built component of formio.
*/
function createCustomFormioComponent() {
  /*
    In built component of formio.
  */
  const BaseComponent = Components.components.input;

  return class CustomComponent extends BaseComponent {
    /*
     Define schema of custom component.
    */
    static override schema() {
      return super.schema({
        type: 'emptab',
        key: 'emptab',
        selector: 'emp-tab',
      });
    }

    /*
     This is the Form Builder information on how this component should show up within the form builder.
    */
    static get builderInfo() {
      return {
        title: 'Emp Tab',
        icon: 'list',
        group: 'custom',
        schema: this.schema()
      };
    }

    /*
     * Overrides the element information.
     * @returns custom element information.
    */
    override elementInfo() {
      const info = super.elementInfo();
      info.type = 'emp-tab'; //must override with custom selector
      return info;
    }

    /*
     * Overrides the rendering of an element with custom information.
     * @returns Rendered template with custom information.
    */
    override renderElement() {
      const info = this.elementInfo();
      return this.renderTemplate('input', {
        input: info
      });
    }

    override getValue() {
      return super.getValue();
    }
    
    override setValue(value: any,flags:any) {
      return super.setValue(this.element,flags);
    }
  };
}
