import type {AlwatrDocumentObject} from '@alwatr/fetch';

export interface User extends AlwatrDocumentObject {
  name: string;
  phoneNumber: number;
  nationalCode: number;
}

export interface Product extends AlwatrDocumentObject {
  name: string;
  description: string;
  type: string; // FIXME:
  image: string;
  price: number;
}

export interface Item extends Product {
  value: number;
}

export interface OrderReceiver {
  nationalCode: number;
  phoneNumber: number;
  address: string;
}

export interface OrderDetail {
  orderReceiver: OrderReceiver;
  description: string;
}

export interface Order extends AlwatrDocumentObject {
  userId: string;
  detail: OrderDetail;
  itemList: Array<Item>;
}
