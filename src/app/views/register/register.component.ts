import {Component} from '@angular/core';

@Component({
	selector: 'xxx-register',
	templateUrl: './register.component.html',
	styles: [`
		.extra-spacing li { margin-bottom: 1em }

		form { color: #000; }

		hr { border-color: rgba(0,0,0,0.2); }

		h3, h4 { color: #000; }

		.alert {
			padding: 12px 16px;
			margin-bottom: 1em;
			font-weight: 600;
			border-radius: 4px;
		}
		.alert-success {
			background: #d4edda;
			color: #155724;
			border: 1px solid #c3e6cb;
		}
		.alert-danger {
			background: #f8d7da;
			color: #721c24;
			border: 1px solid #f5c6cb;
		}

		.required { color: red; }

		.field {
			display: flex;
			flex-direction: column;
		}
		.field label {
			font-size: 0.75em;
			font-weight: 600;
			color: #333;
			margin-bottom: 2px;
		}
		.field input,
		.field textarea {
			border: none;
			border-bottom: 2px solid #333;
			background: transparent;
			color: #000;
			font-size: 1em;
			padding: 4px 2px;
			outline: none;
			width: 100%;
			font-family: inherit;
		}
		.field input:focus,
		.field textarea:focus {
			border-bottom-color: #000;
		}
		.field input:disabled,
		.field textarea:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}
		.field textarea {
			resize: vertical;
		}

		button[type=submit] {
			background: #000;
			color: #fff;
			border: none;
			padding: 10px 28px;
			font-size: 1em;
			cursor: pointer;
		}
		button[type=submit]:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
	`]
})
export class RegisterComponent {
	loading = false;
	success = false;
	error = false;

	async submit(value: any) {
		this.loading = true;
		this.error = false;
		try {
			await window.momentum.data.create('Applications', value);
			this.success = true;
		} catch {
			this.error = true;
		} finally {
			this.loading = false;
		}
	}
}
