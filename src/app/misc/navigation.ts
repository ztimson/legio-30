export type NavigationItem = {
	label: string,
	url: string,
	fragment?: string
};

export type NavigationGroup = {
	label: string,
	children: NavigationItem[][]
}[];

export const NAVIGATION: NavigationGroup = [
	{label: 'Home', children: [[
			{label: 'About', url: '/', fragment: 'about'},
			{label: 'Contact', url: '/', fragment: 'contact'},
			{label: 'Gallery', url: '/gallery'},
	]]},
	{label: 'Events', children: [[
			{label: 'Castra Aestiva', url: '/event', fragment: 'aestiva'},
			{label: 'Castra Hiberna', url: '/event', fragment: 'hiberna'},
		], [
			{label: 'Calendar', url: '/event/calendar'},
	]]},
	{label: 'Learn', children: [[
			{label: 'Legio XXX', url: '/info/legio-xxx'},
			{label: 'Legion Camp', url: '/info/legion-camp'},
			{label: 'Legion Headquarters', url: '/info/legion-headquarters'},
			{label: 'Legion Organization', url: '/info/legion-organization'},
			{label: 'Legionairy Equipment', url: '/info/legionairy-equipment'},
			{label: 'Legionairy Training', url: '/info/legionairy-training'},
		], [
			{label: 'Resources', url: '/info/resources'},
	]]},
	{label: 'Reenact', children: [[
			{label: 'Getting Started', url: '/getting-started'},
			{label: 'Rules & Regulations', url: '/rules'},
		], [
			{label: 'Trusted Vendors', url: '/vendors'},
			{label: 'Kit Assembly', url: '/diy'},
			{label: 'Kit Maintinance', url: '/info/maintinance'},
		], [
			{label: 'Login/Register', url: '/login'},
	]]},
]
