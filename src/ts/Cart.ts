import Buyable from './Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    calculateTotalCost(): number {
      return this._items.reduce((total, item) => total + item.price, 0);
    }

    caclulateTotalWithDiscount(discount: number): number {
      return this._items.reduce((total, item) => total + item.price * (1 - discount /100), 0);
    }

    remove(id: number): void {
      this._items = this._items.filter(item => item.id !== id);
    }
}