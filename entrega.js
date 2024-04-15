class ProductManager {
    #priceBaseGain = 0.15;
    constructor(){
        this.products = [];
    }

    addProduct(id, name,  description, price, thumbnail, stock = 50, date = new Date()){
        const product = {
            id: this.#getMaxId() + 1,
            name,
            description,
            stock,
            price: price + this.#priceBaseGain,
            thumbnail,
            participants: []
        };
        this.products.push(product);
    }

    #getMaxId() {
        let maxId = 0;
        this.products.map((product) => { 
        if (product.id > maxId) maxId = product.id;
        });
        return maxId;
    }

    getProduct() {
        return this.products;
    }

    addUser(idProduct, idUser){
        const product = this.#getProduct(idProduct);
        if(product){
            if(!product.participants.includes(idUser)) product.participants.push(idUser);
        } else return 'this product not exists';
    }

    #getProduct(idProduct){
        return this.products.find((product) => product.id === idProduct);
    }

    productTour(idProduct, newSite, newDate) {
        const product = this.#getProduct(idProduct);
        if(product) {
            const newProduct = {
                ...product,
                id: this.#getMaxId() + 1,
                site: newSite,
                date: newDate,
                participants: []
            };
            this.products.push(newProduct);
        } else return 'this product not exists';
    }
}

const productManager = new ProductManager();

productManager.addProduct('Clasico de Rosario','Clasico de Rosario','Newells vs Rosario Central', 10000, 'https://media.lacapital.com.ar/p/ea0927317f489575fc748d81b284581c/adjuntos/203/imagenes/100/056/0100056616/642x0/smart/ggpng.png');
productManager.addProduct('Superclasico','SuperClasico','Boca Juniors vs River Plate', 15000, 'https://media.tycsports.com/files/2022/09/11/477476/superclasico_862x485_wmk.webp');
productManager.addProduct('Clasico de Avellaneda','Clasico de Avellaneda','Independiente vs Racing', 15000, 'https://www.elgrafico.com.ar/media/cache/pub_news_details_large/media/i/76/fb/76fb9e46e16e4609c6e491f2ff40f9057f6777c5.jpg');
// console.log(productManager.getProduct());
productManager.addUser(1, 'Juan')
productManager.addUser(2, 'Pablo')
productManager.addUser(2, 'Federico')
productManager.addUser(3, 'Nicolas')
productManager.productTour(4,'Clasico de Rosario','Newells vs Rosario Central', 10000, 'https://media.lacapital.com.ar/p/ea0927317f489575fc748d81b284581c/adjuntos/203/imagenes/100/056/0100056616/642x0/smart/ggpng.png', new Date('2024-10-10T00:02:08.454Z'))
console.log(productManager.getProduct());