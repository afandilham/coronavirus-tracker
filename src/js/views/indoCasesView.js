import { elements } from "./base";
// Import Images
import imgHappy from '../../img/icons/happy-2.svg';
import imgQuiet from '../../img/icons/quiet.svg';
import imgUnhappy from '../../img/icons/unhappy.svg';

export const renderIndoCard = result => {
  const markup = `
    <div class="shadow-lg p-4 flex flex-col items-center max-w-sm text-white card-indo-health rounded w-full md:w-1/3 mx-4 my-4">
      <img class="icon-indo-happy w-16" alt="Sembuh" src="${imgHappy}">
      <p class="uppercase text-lg font-semibold pt-2">Sembuh</p>
      <p class="text-4xl font-bold">${parseFloat(result.recovered.value).toLocaleString('en')}</p>
      <p class="uppercase">Orang</p>
    </div>
    <div class="shadow-lg p-4 flex flex-col items-center max-w-sm text-white card-indo-positive rounded w-full md:w-1/3 mx-4 my-4">
      <img class="icon-indo-positive w-16" alt="Sembuh" src="${imgQuiet}">
      <p class="uppercase text-lg font-semibold pt-2">Positif</p>
      <p class="text-4xl font-bold">${parseFloat(result.confirmed.value).toLocaleString('en')}</p>
      <p class="uppercase">Orang</p>
    </div>
    <div class="shadow-lg p-4 flex flex-col items-center max-w-sm text-white card-indo-deceased rounded w-full md:w-1/3 mx-4 my-4">
      <img class="icon-indo-deceased w-16" alt="Sembuh" src="${imgUnhappy}">
      <p class="uppercase text-lg font-semibold pt-2">Meninggal</p>
      <p class="text-4xl font-bold">${parseFloat(result.deaths.value).toLocaleString('en')}</p>
      <p class="uppercase">Orang</p>
    </div>
  `;
  elements.indoCases.insertAdjacentHTML('beforeend', markup);
}