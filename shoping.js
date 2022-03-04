const displayLocalData = () => {
    const cart = getCart();
    for (const key in cart) {
        displayItem(key)
    }
}

const addItem = () => {
    const textInput = document.getElementById('input-text')
    const name = textInput.value;
    // validation
    if (!name) {
        return;
    }
    // add item in ui
    displayItem(name);
    // local storage
    addToCart(name);

    textInput.value = '';
}

const displayItem = name => {
    const ul = document.getElementById('products')
    const li = document.createElement('li')
    li.innerText = name;
    ul.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart')
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    }
    else {
        cartObj = {};
    }
    return cartObj;
}

const addToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}

const purchase = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart')
}

displayLocalData();