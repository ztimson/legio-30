import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html'
})
export class ContactComponent {
	public contact: string = '';
	public error = false;
	public form!: FormGroup;

	constructor(private fb: FormBuilder) {
		this.form = fb.group({
			email: '',
			subject: '',
			body: '',
		});
	}

	reset() {
		this.error = false;
		this.form.reset();
	}
}
