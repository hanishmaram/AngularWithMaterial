
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule, MatDatepickerModule,MatNativeDateModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule,MatCardModule,MatSelectModule,MatProgressSpinnerModule,MatDialogModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  imports:[MatButtonModule,MatCheckboxModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,MatTabsModule,MatCardModule,MatSelectModule,MatProgressSpinnerModule,MatDialogModule],
  exports:[MatButtonModule,MatCheckboxModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,MatTabsModule,MatCardModule,MatSelectModule,MatProgressSpinnerModule,MatDialogModule]
})
export class AppMaterialComponentModule{

}