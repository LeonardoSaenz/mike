import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { SharinganComponent } from  '../sharingan/sharingan.component';
import { MeliodasComponent } from '../meliodas/meliodas.component';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  entryComponents: [SharinganComponent,MenuComponent],
  declarations: [HomePage,SharinganComponent,MenuComponent],
})
export class HomePageModule {}
