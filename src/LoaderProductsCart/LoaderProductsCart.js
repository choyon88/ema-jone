import { getShoppingCart } from "../utilities/fakedb";

const loaderProductsCart = async () => {
    const res = await fetch('products.json');
    const data = await res.json()
    
    const storedCart = getShoppingCart();
    const saveCart = [];
    for (const id in storedCart) {
        const addProducts = data.find(pd => pd.id === id);
        if (addProducts) {
            const quantity = storedCart[id];
            addProducts.quantity = quantity;
            saveCart.push(addProducts);
        }
    }
    return saveCart;
}


export default loaderProductsCart;