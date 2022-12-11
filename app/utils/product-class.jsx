class Producto {
    constructor(id, name, description, price, image) {
      this._id = () => id;
      this._name = () => name;
      this._description = () => description;
      //Transformar el precio a USD y mostrarlo con dos decimales
      this._price = () => (price*0.05).toFixed(2);
      this._image = () => image;
    }
  
    //Metodo
    async getTop3Products() {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products?offset=0&limit=3"
        );
        const data = await response.json();
        //Se crea un iterador para obtener los primeros 3 productos
  
        const top3Products = [];
  
        for (const product of data) {
          //Se crea una instancia de la clase Producto
          const productInstance = new Producto(
            product.id,
            product.title,
            product.description,
            product.price,
            product.category.image
          );
          top3Products.push(productInstance);
        }
        //Se obtiene la clase horus-container__products
        const productsContainer = document.querySelector(
          ".horus-container__products"
        );
  
        //Se crea un iterador para crear las cards de los productos
        for (const product of top3Products) {
          //Se crea un div para la card
          const productCard = document.createElement("div");
          productCard.classList.add("horus-container__products-card");
          //Se crea un elemento img para la card
          const productCardImg = document.createElement("img");
          productCardImg.classList.add("horus-container__products-card-img");
          productCardImg.src = product._image();
          productCardImg.alt = product._name();
          //Se crea un elemento h1 para la card
          const productCardTitle = document.createElement("h1");
          productCardTitle.classList.add("horus-container__products-card-title");
          productCardTitle.textContent = product._name();
          //Se crea un elemento p para la card
          const productCardDescription = document.createElement("p");
          productCardDescription.classList.add(
            "horus-container__products-card-description"
          );
          productCardDescription.textContent = product._description();
          //Se crea un elemento p para la card
          const productCardPrice = document.createElement("p");
          productCardPrice.classList.add("horus-container__products-card-price");
          productCardPrice.textContent = product._price()+" USD";
          //Se crea un elemento button para la card
          const productCardBtn = document.createElement("button");
          productCardBtn.classList.add("horus-container__products-card-btn");
          productCardBtn.textContent = "Comprar";
  
          //Se agregan los elementos a la card
          productCard.appendChild(productCardImg);
          productCard.appendChild(productCardTitle);
          productCard.appendChild(productCardDescription);
          productCard.appendChild(productCardPrice);
          productCard.appendChild(productCardBtn);
          //Se agrega la card al contenedor de productos
          productsContainer.appendChild(productCard);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  export default Producto;