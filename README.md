# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

Проект создан с помощью модели MVP (Model-View-Presenter).

Описание базовых классов и их методы:

1. EventEmitter - обработчик событий, этот класс позволяет приложению реагировать на события.
  -методы:
      on - установка слушателя на одно событие.
      off - снятие слушателя.
      emit - инициализирует событие с данными.
      onAll - установка слушателя на все события.
      offAll - сбрасывание всех слушателей.

2. Model - Базовая модель, чтобы можно было отличить ее от простых объектов с данными.
  -методы:
      emitChanges - метод для EventEmitte, для уведомления о событии.

3. AppData - этот класc отвечает за состояние\использование данных всего проекта.
  -методы:
      addToBacket - метод добавления товара в корзину.
      getBacketItemCount - метод для получения количества товара в корзине.
      removeFromBacket - метод удаления товара из корзины.
      clearBacket - метод полной очистки корзины.
      setCatalog - метод получения каталога товаров.
      setPreview - метож получения одной карточки товара по id.
      checkItemToBacket - метод проверки нахождения товара в корзине.
      getFullPrice - метод получения общей стоимости товара в корзине.
      addPayMathod- метод выбора способа оплаты.
      addAdsress - метод ввода адреса доставки.
      validateOrder - валидация формы заказа.
      setContactInform - метод ввода Email и номера телефона.
      validateContactInform - валидация контактных данных.

4. Api - класс для работы с Api.
  -методы:
      handleResponse(response: Response): Promise<object> - метод для обработки данных от сервера Api.
      get(url: string) - получение данных от сервера Api
      post(url: string, data: object, method: ApiPostMethods = 'POST') - отправка данных на сервер Api.

--------------------------------------------------------------------------------------------------------------------
1. Components - Абстрактный класс для работы с элементами DOM.
  -методы:
      setText(element: HTMLElement, className: string) - получает элемент разметки и строку текста и устанавливает текстовое содержание.
      setImage(element: HTMLElement, src: string) - получает элемент изображения и строку URL и устанавливает её. 
      setDisabled(element: HTMLElement, state: boolean) - получает элемент разметки который нужно отключить и логическое значение когда элемент будет отключен.
      render(data?: Partial<T>): HTMLElement - обновляет свойства экземпляра и возвражает элемент разметки.

  Классы наследуемые от Components.

  1.1 Modal - Класс определяет изменения модального окна на странице.
    -методы: 
        set content - получение данных для модального окна.
        open - открытие модального окна.
        close - закрытие модального окна.
        render - изменений отображения модального окна.

  1.2 Basket - Класс определяет поведение корзины.
    -методы:
        set items(items: HTMLElement) - наполнение корзины.
        set selected(items: string) - состояние кнопки в зависимости от наличия товаров.
        set total(total: number) - метод для отображения общей стоимости.

  1.3 Form - Класс определяет поведение инпутов, их валидации и поведение со страницей.
    -методы:
        onInputChange(field: keyof I, value: string) - метод для определения состояния инпутов.
        set valid(value: boolean) - метод проверки состояния кнопки.
        set errors(value: boolean) - метод установки текста ошибки.
        render(state: Partial<T> & IForm) - отображение изменений инпута.

     1.3.1 Order - Наследуется от класса Form. Класс для работы с данными для заказа товара.
      - методы:
          toggleButton(value: string) - метод для изменения работы кнопки.
          getAdress(value: string) - метод для ввода адреса.  

  1.4 Success - Класс определяет страницу после успушного заказа.

  1.5 Page - Класс для отображения на странице.
    - методы: 
        set counter(value: string) - получение количества карточек товара. 
        set catalog(value: HTMLElement[]) - получение полного каталога товаров.
        set locked(value: boolean) - блокировка страницы при открытия модального окна.

  1.6 Product - Класс описывает карточку с товаром.
    - методы: 
      set image(value: string) - получение картинки товара.
      set id(value: string) - получение id товара.
      set category(value: string) - получение категории товара.
      set title(value: string) - получение наименование товара.
      set description(value: string) - получение описания товара.
      set price(value: number) - получение цены товара

2. Contacts - Класс карточки ввода Email и номера телефона
  -методы:
    set email(value: string) - получение email.
    set phone(value: string) - получение номера телефона.

===================================================================================
Основные типы данных и интерфейсы:

1. type EventName = string | RegExp;
    type Subscriber = Function;
    type EmitterEvent = {
      eventName: string,
      data: unknown
    }

    interface IEvents {
      on<T extends object>(event: EventName, callback: (data: T) => void): void;
      emit<T extends object>(event: string, data?: T): void;
    }

2. interface IModel {
      content: HTMLElement;
    }

3. interface IAppData {
      id: string;
      title: string;
      category: string;
      image: string;
      description: string;
      price: string;
      payment: paymentMethod;
      email: string;
	    phone: string;
      adress: string;
      total: number;   
  }

4. type ApiListResponse<Type> = {
    total: number,
    items: Type[]
  }

    type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';
--------------------------------------------------------------------------------------------------------------------
1. Components

  1.1 interface IModal {
        content: HTMLElement;
      }

  1.2 interface IBasketCard {
        title: string;
	      price: number | string;
        deleteButton: HTMLElement;
        number: HTMLElement;
      }

  1.3 interface IForm {
        valid: boolean;
        errors: string[];
      }

     1.3.1 type paymentMethod = 'card' | 'cash';
            
            interface IOrderForm {
	            payment: paymentMethod;
	            address: string;
            }

  1.4 interface ISuccess {
	      totalPrice: number;
      }

      interface ISuccessCard {
	      onClick: () => void;
      }

  1.5 interface IPage {
        counter: number;
        catalog: HTMLElement[];
        locked: boolean;
      } 

  1.6 interface IProductActions {
        onClick: (event: MouseEvent) => void;
      }
      
      interface IProduct {
        category: string;
        description?: string;
        id: string;
        image: string;
        price: number | null;
        title: string;
      }

2. interface IContactInfoForm {
	    email: string;
	    phone: string;
    }


## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка
```
npm run build
```

или

```
yarn build
```