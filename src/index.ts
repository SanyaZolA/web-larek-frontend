import './scss/styles.scss';
import {Api} from './components/base/api';
import './utils/constants.ts';
import {cloneTemplate, createElement, ensureElement} from "./utils/utils";


// const API_URL = `${process.env.API_ORIGIN}/api/weblarek`;
// const a = new Api(API_URL);
// const rer = '/product/'
// const wr = a.get(rer);

// async function fetchData() {
//   const data: any = await a.get(rer); // Дожидаемся выполнения запроса
//   if (data) {
//     // Обрабатываем полученные данные
//     console.log('Полученные данные:', data.items[2]);

//   } else {
//     console.log('Не удалось получить данные');
//   }
// }

// fetchData();

