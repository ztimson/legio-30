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
			{label: 'Castra Aestiva', url: '/events', fragment: 'aestiva'},
			{label: 'Castra Hiberna', url: '/events', fragment: 'hiberna'},
		], [
			{label: 'Calendar', url: '/calendar'},
	]]},
	{label: 'Learn', children: [[
			{label: 'Common Questions', url: '/info/questions'},
		], [
			{label: 'Trajan', url: '/info/trajan'},
			{label: 'Legio XXX', url: '/info/legio-xxx'},
			{label: 'Legion Camp', url: '/info/camp'},
			{label: 'Legion Headquarters', url: '/info/headquarters'},
			{label: 'Legion Organization', url: '/info/organization'},
			{label: 'Legionairy Equipment', url: '/info/equipment'},
			{label: 'Legionairy Training', url: '/info/training'},
		], [
			{label: 'Glossary', url: '/info/glossary'},
			{label: 'Resources', url: '/info/resources'},
	]]},
	{label: 'Reenact', children: [[
			{label: 'Getting Started', url: '/getting-started'},
			{label: 'Rules & Regulations', url: '/rules'},
		], [
			{label: 'Trusted Vendors', url: '/vendors'},
			{label: 'Kit Assembly', url: '/diy'},
			{label: 'Kit Maintinance', url: '/maintinance'},
		], [
			{label: 'Login/Register', url: '/login'},
	]]},
]
