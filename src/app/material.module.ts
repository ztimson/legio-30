import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';

export const MATERIAL_MODULES = [
	MatButtonModule,
	MatCheckboxModule,
	MatDatepickerModule,
	MatDialogModule,
	MatDividerModule,
	MatIconModule,
	MatInputModule,
	MatFormFieldModule,
	MatMenuModule,
	MatNativeDateModule,
	MatSelectModule,
	MatProgressSpinnerModule,
	MatToolbarModule
];

@NgModule({
	imports: MATERIAL_MODULES,
	exports: MATERIAL_MODULES,
})
export class MaterialModule {}
