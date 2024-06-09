export interface IProductActions {
  onClick: (event: MouseEvent) => void;
}

export interface IProduct {
  category: string;
  description?: string;
  id: string;
  image: string;
  price: number | null;
  title: string;
}

export interface IProductPreview {
  category: string;
  description?: string;
	title: string;
	price: number;
  image: string;
}

export interface IBasketCard {
  title: string;
  number: number;
	price: number | string;
}

export type paymentMethod = 'card' | 'cash';

export interface IOrderForm {
	payment: paymentMethod;
	address: string;
}

export interface IContactInfoForm {
	email: string;
	phone: string;
}

export interface ISuccess {
	total: number;
}

export interface ISuccessCard {
	onClick: () => void;
}