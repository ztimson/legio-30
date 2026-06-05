import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MomentumService} from '../../../services/momentum.service';

type CalEvent = {
	_id?: string;
	title: string;
	date: string;
	endDate?: string;
	location?: string;
	description?: string;
};

type EventGroup = {
	month: string;
	events: CalEvent[];
};

@Component({
	selector: 'xxx-calendar',
	templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit {
	@ViewChild('createDialog') createDialog!: TemplateRef<any>;

	events: CalEvent[] = [];
	groupedEvents: EventGroup[] = [];
	loading = true;
	saving = false;
	form: Partial<CalEvent> = {};
	editingId: string | null = null;

	constructor(private dialog: MatDialog, public momentum: MomentumService) {}

	async ngOnInit() {
		await this.loadEvents();
	}

	async deleteEvent(event: CalEvent) {
		if (!event._id || !confirm(`Delete "${event.title}"?`)) return;
		await this.momentum.api.data.delete('Events', <any>event._id);
		await this.loadEvents();
	}

	async loadEvents() {
		this.loading = true;
		const raw = await this.momentum.api.data.read<CalEvent>('Events') as CalEvent[];
		const now = new Date();
		this.events = raw
			.filter(e => new Date(e.date) >= now)
			.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
		this.groupedEvents = this.groupByMonth(this.events);
		this.loading = false;
	}

	groupByMonth(events: CalEvent[]): EventGroup[] {
		const map = new Map<string, CalEvent[]>();
		for (const e of events) {
			const key = new Date(e.date).toLocaleDateString('en-US', {month: 'long', year: 'numeric'});
			if (!map.has(key)) map.set(key, []);
			map.get(key)!.push(e);
		}
		return Array.from(map.entries()).map(([month, events]) => ({month, events}));
	}

	openCreate() {
		this.editingId = null;
		this.form = {};
		this.dialog.open(this.createDialog, {width: '480px'});
	}

	openEdit(event: CalEvent) {
		this.editingId = event._id ?? null;
		this.form = {...event};
		this.dialog.open(this.createDialog, {width: '480px'});
	}

	async saveEvent() {
		if (!this.form.title || !this.form.date) return;
		this.saving = true;
		if (this.editingId) {
			await this.momentum.api.data.update<CalEvent>('Events', <any>{_id: this.editingId, ...this.form});
		} else {
			await this.momentum.api.data.create<CalEvent>('Events', <any>this.form);
		}
		this.dialog.closeAll();
		this.saving = false;
		await this.loadEvents();
	}
}
