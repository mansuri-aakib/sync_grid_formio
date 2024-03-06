import { Injector } from '@angular/core';
import { EmpTab } from './emp-tab.component';
import { createCustomElement } from '@angular/elements';
import { Components } from 'formiojs';

export function registerEmpTableComponent(injector: Injector) {
  customElements.define('emp-tab', createCustomElement(EmpTab, { injector }));
  Components.setComponent('emptab', createCustomFormioComponent());
}

function createCustomFormioComponent() {
  const BaseComponent = Components.components.input;

  return class CustomComponent extends BaseComponent {
    static override schema() {
      return super.schema({
        type: 'emptab',
        key: 'emptab',
        selector: 'emp-tab',
      });
    }

    static get builderInfo() {
      return {
        title: 'Emp Tab',
        icon: 'list',
        group: 'custom',
        schema: this.schema()
      };
    }

    override elementInfo() {
      const info = super.elementInfo();
      info.type = 'emp-tab'; //must override with custom selector
      return info;
    }

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
