import Hamburger from './img/hamburger.svg'

import Bijou from './img/bijou.jpg'
import Eggnogg from './img/eggnogg.jpg'
import Mojito from './img/mojito.jpg'
import Negroni from './img/negroni.jpg'
import Rattlesnake from './img/rattlesnake.jpg'
import Zinger from './img/zinger.jpg'

import Dribble from './img/dribble.svg'
import Instagram from './img/instagram.svg'
import Facebook from './img/facebook.svg'

// insert 'hamburger' icon

const navbarNode = document.querySelector('nav')

export const insertHamburger = () => {
  const hamburger = document.createElement('img')
  hamburger.className = 'navbar__hamburger'
  hamburger.src = Hamburger
  hamburger.alt = 'menu icon'
  navbarNode.appendChild(hamburger)
}

// activate 'hamburger' icon

const navbarList = document.querySelector('.navbar')

const toggleMenu = () => {
  if (navbarList.className === 'navbar navbar--desktop') {
    navbarList.className += ' navbar--mobile'
  } else {
    navbarList.className = 'navbar navbar--desktop'
  }
}

export const listenForClick = () => {
  const hamburger = document.querySelector('.navbar__hamburger')
  hamburger.addEventListener('click', toggleMenu)
}

// insert cards content

const images = [Bijou, Negroni, Mojito, Rattlesnake, Eggnogg, Zinger]
const names = ['Bijou', 'Negroni', 'Mojito', 'Texas Rattlesnake', 'Egg Nogg', 'Zinger']
const cardNode = document.querySelectorAll('.card')

export const insertImages = () => {
  for (let i = 0; i < cardNode.length; i++) {
    cardNode[i].innerHTML = `
    <img class="card__img" src="${images[i]}" alt="drink">
    <p class="card__name">${names[i]}</p>
    `
  }
}

// insert social media icons

const icons = [Dribble, Instagram, Facebook]
const iconNames = ['dribble', 'instagram', 'facebook']
const footerNode = document.querySelector('.footer__social')

export const insertIcons = () => {
  for (let i = 0; i < icons.length; i++) {
    const iconElement = document.createElement('img')
    iconElement.className = 'footer__icon'
    iconElement.src = icons[i]
    iconElement.alt = iconNames[i]
    footerNode.appendChild(iconElement)
  }
}
