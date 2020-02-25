import util from '../helpers/util.js';
import bookData from '../helpers/data/bookData.js'
const addToCartEvent = () => {
    console.log('you click cart');
    let domString = "";
    domString += "This is a cart";
    util.printToDom('cart-container', domstring);
    
};

const makeStore = () => {
    const book = bookData.getBook();
  let domString = "";
  domString += `<h2>${book.name}</h2>`;
  domString += '<button id = "add-to-cart-button" class="btn btn-secondary"> Add to Cart</button>';
document.getElementById('add-to-cart-button').addEventListener(click,addToCartEvent)
  
  
  util.printToDom('store-container', domString)


};
//key and value are the same
export default { makeStore, addToCartEvent };
makeStore();


