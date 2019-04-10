import Bijou from './img/bijou.jpg'
import Eggnogg from './img/eggnogg.jpg'
import Mojito from './img/mojito.jpg'
import Negroni from './img/negroni.jpg'
import Rattlesnake from './img/rattlesnake.jpg'
import Zinger from './img/zinger.jpg'

const images = [Bijou, Eggnogg, Mojito, Negroni, Rattlesnake, Zinger]
const node = document.querySelectorAll('.card');

export const insertImages = () => {
  for (let i = 0; i < node.length; i++) {
    node[i].innerHTML = `<img class="card__img" src="${images[i]}" alt="drink">`;
  }
}
