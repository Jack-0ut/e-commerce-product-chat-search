import Product from "@/models/Product";

class LocalStorage {
  private readonly cartKey = 'cart';
  private readonly favoriteKey = 'favorite';

  private getAllProductsFromStorage(key: string): Product[] {
    const productsString = localStorage.getItem(key);
    if (productsString) {
      return JSON.parse(productsString);
    }
    return [];
  }

  addProduct(product: Product, list: 'cart' | 'favorite'): void {
    const key = list === 'cart' ? this.cartKey : this.favoriteKey;
    const products = this.getAllProductsFromStorage(key);
    products.push(product);
    localStorage.setItem(key, JSON.stringify(products));
  }

  removeProduct(productId: number, list: 'cart' | 'favorite'): void {
    const key = list === 'cart' ? this.cartKey : this.favoriteKey;
    const products = this.getAllProductsFromStorage(key);
    const updatedProducts = products.filter(product => product.id !== productId);
    localStorage.setItem(key, JSON.stringify(updatedProducts));
  }

  getAllProducts(list: 'cart' | 'favorite'): Product[] {
    const key = list === 'cart' ? this.cartKey : this.favoriteKey;
    return this.getAllProductsFromStorage(key);
  }
}

export default LocalStorage;