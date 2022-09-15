import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

export const MATERIAL_MODULES = [
	MatButtonModule,
	MatDividerModule,
	MatIconModule,
	MatMenuModule,
	MatToolbarModule
];

@NgModule({
	imports: MATERIAL_MODULES,
	exports: MATERIAL_MODULES,
})
export class MaterialModule {}
