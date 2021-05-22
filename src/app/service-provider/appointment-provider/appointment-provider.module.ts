import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentProviderPageRoutingModule } from './appointment-provider-routing.module';

import { AppointmentProviderPage } from './appointment-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentProviderPageRoutingModule
  ],
  declarations: [AppointmentProviderPage]
})
export class AppointmentProviderPageModule {}
