// Import CSS
import '../style/style.css';
import '../style/tailwind.css';

// Animate On Scroll
import AOS from 'aos';

// Images
import imgHappy from '../img/icons/happy-2.svg';
import imgPositive from '../img/icons/quiet.svg';
import imgDeceased from '../img/icons/unhappy.svg';

document.querySelector('icon-happy').src = imgHappy;
document.querySelector('icon-positive').src = imgPositive;
document.querySelector('icon-deceased').src = imgDeceased;

AOS.init();