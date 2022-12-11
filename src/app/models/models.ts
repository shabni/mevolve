export interface AppRule {
	image: string;
	title: string;
}

export interface PricePlan {
	price: number;
	type: 'Free' | 'Per Month' | 'Per Year';
	duration: 'For 30 days' | 'Monthly Billing' | 'Yearly Billing';
}