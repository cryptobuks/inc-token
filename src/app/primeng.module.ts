import { NgModule } from "@angular/core";
import { TimelineModule } from "primeng/timeline";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { PanelMenuModule } from 'primeng/panelmenu';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';

const AllPrimeNGModules = [
    TimelineModule,
    CardModule,
    ButtonModule,
    PanelMenuModule,
    DividerModule,
    InputNumberModule,
    SelectButtonModule,
    AccordionModule,
    DialogModule
];

@NgModule({
  imports: [AllPrimeNGModules],
  exports: [AllPrimeNGModules],
})
export class PrimeNGModule {}