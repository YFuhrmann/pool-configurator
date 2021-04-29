import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoolFormComponent } from './components/pool-form/pool-form.component';
import { PoolColorComponent } from './components/pool-color/pool-color.component';
import { PoolTechComponent } from './components/pool-tech/pool-tech.component';
import { PoolServiceComponent } from './components/pool-service/pool-service.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';



@NgModule({
  declarations: [
    PoolFormComponent,
    PoolColorComponent,
    PoolTechComponent,
    PoolServiceComponent,
    ContactInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PoolFormComponent,
    PoolColorComponent,
    PoolTechComponent,
    PoolServiceComponent,
    ContactInfoComponent
  ]
})
export class ConfiguratorModule { }
