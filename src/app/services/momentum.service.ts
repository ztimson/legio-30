import {Injectable} from '@angular/core';
import {Momentum} from '@ztimson/momentum';
import {BehaviorSubject} from 'rxjs';
import {from, map} from 'rxjs';
import {filter} from 'rxjs/operators';

declare global {
	interface Window {
		momentum: Momentum;
		electronEnvironment: any;
	}

	interface location {
		port: string;
	}
}

@Injectable({providedIn: 'root'})
export class MomentumService {
	static SCHEMA: {[key: string]: string} = {
		contact: 'Contact',
	}

	api!: Momentum;

	installable = new BehaviorSubject(false);
	settings = new BehaviorSubject<{[key: string]: any}>({});
	title = new BehaviorSubject<string | null>(null);

	// @ts-ignore
	user = new BehaviorSubject<User | null | undefined>(undefined); // Undefined at init, null when logged out, object when logged in.
	admin = from(this.user).pipe(filter(u => u !== undefined), map(u => this.api.permissions.has('admin')));
	isLoggedIn = from(this.user).pipe(filter(u => u !== undefined), map(Boolean));

	constructor() {
		this.api = window['momentum'] = new Momentum("https://legio-30.org", {
			app: "Website",
			analytics: "prompt",
			logLevel: "ERROR",
			persist: true,
		});

		this.api.auth.on('login', () => this.user.next(this.api.auth.user));
		this.api.auth.on('logout', () => location.reload());
		this.api.client.on('install', () => this.installable.next(this.api.client.canInstall));
		this.installable.next(this.api.client.canInstall);

		this.api.auth.readSession();
		this.api.settings.sync((event, value) => {
			this.title.next(value['title']);
			this.settings.next(value);
		}, {map: true});
	}
}
