// import {Component} from "./base/Component";
// import {ensureElement} from "../utils/utils";
// import {IProductActions, IProduct} from "../types/index";

// export class Product extends Component<IProduct> {
//     protected _category: HTMLElement;
//     protected _description?: HTMLElement;
//     protected _image: HTMLImageElement;
//     protected _price: HTMLElement;
//     protected _title: HTMLElement;
//     protected _button: HTMLButtonElement;

//     constructor(protected blockName: string, container: HTMLElement, actions?: IProductActions) {
//         super(container);

//         this._category = ensureElement<HTMLElement>(`.${blockName}__category`);
//         this._description = container.querySelector(`.${blockName}__description`);
//         this._image = ensureElement<HTMLImageElement>(`.${blockName}__image`, container);
//         this._price = ensureElement<HTMLElement>(`.${blockName}__price`);
//         this._title = ensureElement<HTMLElement>(`.${blockName}__title`, container);
//         this._button = container.querySelector(`.${blockName}__button`);

//         if (actions?.onClick) {
//             if (this._button) {
//                 this._button.addEventListener('click', actions.onClick);
//             } else {
//                 container.addEventListener('click', actions.onClick);
//             }
//         }
//     }

//     // получение id
//     set id(value: string) {
//         this.container.dataset.id = value;
//     }
//  
//     // получение категории товара
//     set category(value: string ) {
//         this.setText(this._category, value);
//     }

//     // получение описание товара товара
//     set description(value: string ) {
//         this.setText(this._description, value);
//     }   

//     // получение картинки товара
//     set image(value: string) {
//         this.setImage(this._image, value, this.title)
//     }

//     // получение цены товара
//     set price(value: string ) {
//         this.setText(this._price, value);
//     }

//     // получение названия
//     set title(value: string) {
//         this.setText(this._title, value);
//     }
//     // установки названия
//     get title(): string {
//         return this._title.textContent || '';
//     }
// }