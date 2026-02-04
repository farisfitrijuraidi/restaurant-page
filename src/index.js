import "./style.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";
loadHome();

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');
const content = document.querySelector('#content');

const clearContent = () => {
    content.textContent = '';
}

homeButton.addEventListener('click', () => {
    clearContent();
    loadHome();
})

menuButton.addEventListener('click', () => {
    clearContent();
    loadMenu();
})

contactButton.addEventListener('click', () => {
    clearContent();
    loadContact();
})
