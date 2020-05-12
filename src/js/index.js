// Import Components
import './components/Navbar';
import './components/Footer';

// Import CSS
import '../style/style.css';
import '../style/tailwind.css';

// Animate On Scroll
import AOS from 'aos';

// Models and Views
import IndoCases from "./models/IndoCases";
import GlobalCases from "./models/GlobalCases";
import * as globalCasesView from '../js/views/globalCasesView';
import * as indoCasesView from '../js/views/indoCasesView';


// Global state
const state = {};

/**
 * Global Cases Controller
 */
const GlobalController = async () => {
  const globalCases = new GlobalCases(); 

  state.cardGlobal = globalCases;
  state.GlobalCountries = globalCases;

  try {
    await state.cardGlobal.getGlobalCard();
    await state.GlobalCountries.getGlobalCountries();

    Object.values(state.GlobalCountries.countries).forEach(async (data) => {
      
      const response = await fetch(`https://covid19.mathdro.id/api/countries/${data.name}/`);
      const responseJson = await response.json();
      
      globalCasesView.renderGlobalTable(responseJson, data.name)
    });

    globalCasesView.renderGlobalCard(state.cardGlobal.result);
  } catch (error) {
    console.log(error)
  }
}


/**
 * Indonesia Cases Controller
 */
const IndonesiaController = async () => {
  state.cardIndo = new IndoCases();

  try {
    await state.cardIndo.getIndoCard();
    
    indoCasesView.renderIndoCard(state.cardIndo.result);
  } catch (error) {
    console.log(error)
  }
}

GlobalController();
IndonesiaController();

// Init Animated On Scroll
AOS.init();

