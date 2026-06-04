import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MomentumService} from '../../services/momentum.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html'
})
export class ContactComponent {
	public error = false;
	public success = false;
	public form!: FormGroup;

	constructor(private fb: FormBuilder, private momentum: MomentumService) {
		this.form = fb.group({
			name: '',
			email: '',
			subject: '',
			body: '',
		});
	}

	public async submitEmail(): Promise<void> {
		this.error = false;
		this.success = false;

		try {
			await this.momentum.api.data.create(MomentumService.SCHEMA['contact'], this.form.value);
			this.success = true;
		} catch (error: any) {
			this.error = error.message;
		}
	}

	reset() {
		this.error = false;
		this.success = false;
		this.form.reset();
	}
}
