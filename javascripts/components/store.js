import util from '../helpers/util.js';
import bookData from '../helpers/data/bookData.js'
import cart from './cart.js';


const addToCartEvent = () => {
    const book = bookData.getBook();
    cart.addToCart(book);
    
};

const makeStore = () => {
    const book = bookData.getBook();
  let domString = "";
  domString += `<h2>${book.name}</h2>`;
  domString += '<button id = "add-to-cart-button" class="btn btn-secondary"> Add to Cart</button>';
  util.printToDom('store-container', domString);
  document.getElementById('add-to-cart-button').addEventListener(click,addToCartEvent);
  
  
};
//key and value are the same
export default { makeStore };



