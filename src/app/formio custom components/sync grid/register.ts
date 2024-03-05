import { Injector } from '@angular/core';
import { FormioCustomComponentInfo } from '../../fomio helper/elements.common';
import { registerCustomFormioComponent } from '../../fomio helper/register-custom-component';
import { SyncGrid } from './sync-grid.component';

const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'syncgrid',
  selector: 'sync-grid',
  title: 'Sync Grid',
  group: 'custom',
  icon: 'table',
};

export function registerSyncGridComponent(injector: Injector) {
  registerCustomFormioComponent(COMPONENT_OPTIONS, SyncGrid, injector);
}
