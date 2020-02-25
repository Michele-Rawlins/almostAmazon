import util from "../helpers/util.js";


const cartToDom = () => {
    let domString = "";
    domString += "This is a cart";
    util.printToDom('cart-container', domstring);
};
export default { cartToDom };