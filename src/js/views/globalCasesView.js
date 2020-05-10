import { elements } from "../views/base";
import GlobalCases from "../models/GlobalCases";
// Import Images
import imgHappy from '../../img/icons/happy-2.svg';
import imgQuiet from '../../img/icons/quiet.svg';
import imgUnhappy from '../../img/icons/unhappy.svg';

export const renderGlobalCard = result => {
  const markup = `
    <div class="shadow-lg p-4 flex flex-col items-center max-w-sm text-white card-health rounded w-full md:w-1/3 mx-4 my-4">
      <img class="icon-happy w-16" alt="Sembuh" src="${imgHappy}">
      <p class="uppercase text-lg font-semibold pt-2">Sembuh</p>
      <p class="text-4xl font-bold">${parseFloat(result.recovered.value).toLocaleString('en')}</p>
      <p class="uppercase">Orang</p>
    </div>
    <div class="shadow-lg p-4 flex flex-col items-center max-w-sm text-white card-positive rounded w-full md:w-1/3 mx-4 my-4">
      <img class="icon-positive w-16" alt="Sembuh" src="${imgQuiet}">
      <p class="uppercase text-lg font-semibold pt-2">Positif</p>
      <p class="text-4xl font-bold">${parseFloat(result.confirmed.value).toLocaleString('en')}</p>
      <p class="uppercase">Orang</p>
    </div>
    <div class="shadow-lg p-4 flex flex-col items-center max-w-sm text-white card-deceased rounded w-full md:w-1/3 mx-4 my-4">
      <img class="icon-deceased w-16" alt="Sembuh" src="${imgUnhappy}">
      <p class="uppercase text-lg font-semibold pt-2">Meninggal</p>
      <p class="text-4xl font-bold">${parseFloat(result.deaths.value).toLocaleString('en')}</p>
      <p class="uppercase">Orang</p>
    </div>
  `;
  elements.globalCases.insertAdjacentHTML('beforeend', markup);
}

export const renderGlobalTable = (result, countryName) => {
  const date = new Date(result.lastUpdate);

  const markup = `
    <tr>
      <td class="border border-gray-400 pl-4 pr-8 py-2">${countryName}</td>
      <td class="border border-gray-400 px-4 py-2">${parseFloat(result.recovered.value).toLocaleString('en')}</td>
      <td class="border border-gray-400 px-4 py-2">${parseFloat(result.confirmed.value).toLocaleString('en')}</td>
      <td class="border border-gray-400 px-4 py-2">${parseFloat(result.deaths.value).toLocaleString('en')}</td>
      <td class="border border-gray-400 px-4 py-2">${date.toLocaleString(['ban', 'id'])}</td>
    </tr>
  `;
  elements.globalTable.insertAdjacentHTML('beforeend', markup);
  console.clear();
}