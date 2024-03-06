import { Injector } from '@angular/core';
import { SyncGrid } from './sync-grid.component';
import { Components } from 'formiojs';
import { createCustomElement } from '@angular/elements';

export function registerSyncGridComponent(injector: Injector) {
  customElements.define('sync-grid', createCustomElement(SyncGrid, { injector }));
  Components.setComponent('syncgrid', createCustomFormioComponent());
}

function createCustomFormioComponent() {
  const BaseComponent = Components.components.input;

  return class CustomComponent extends BaseComponent {
    static override schema() {
      return super.schema({
        type: 'syncgrid',
        key: 'syncGrid',
        selector: 'sync-grid',
      });
    }

    static get builderInfo() {
      return {
        title: 'Sync Grid',
        icon: 'table',
        group: 'custom',
        schema: this.schema()
      };
    }

    override elementInfo() {
      const info = super.elementInfo();
      info.type = 'sync-grid';
      return info;
    }

    override renderElement() {
      const info = this.elementInfo();
      return this.renderTemplate('input', {
        input: info
      });
    }

  };
}
