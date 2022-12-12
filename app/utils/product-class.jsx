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

    //Metodo para obtener los productos por categoria
    async getProductsByCategory(category,pagination_offset,pagination_limit) {
        try {
            const response = await fetch(
            `https://api.escuelajs.co/api/v1/products`
            );
            var i = 0;
            const data = await response.json();
            const productsByCategory = [];
            var countProductsByCategory = 0;
            for (const product of data) {
                if (product.category.name === category) {
                    countProductsByCategory++;
                    if(i >= pagination_offset && i < pagination_limit){
                        const productInstance = new Producto(
                        product.id,
                        product.title,
                        product.description,
                        product.price,
                        product.category.image
                        );
                        productsByCategory.push(productInstance);
                    }
                    i++;
                }
            }
            //Se obtiene la clase horus-container__main-products
            const productsContainer = document.querySelector(
                ".horus-container__main-products"
            );

            //Ver si hay elementos en el contenedor de productos
            if (productsContainer.hasChildNodes()) {
                //Se eliminan los elementos del contenedor de productos
                while (productsContainer.firstChild) {
                    productsContainer.removeChild(productsContainer.firstChild);
                }
            }

            //Se crea un iterador para crear las cards de los productos
            for (const product of productsByCategory) {
                //Se crea un div para la card
                const productCard = document.createElement("div");
                productCard.classList.add("card");
                productCard.style.width = "18rem";
                //Se crea un elemento img para la card
                const productCardImg = document.createElement("img");
                productCardImg.classList.add("card-img-top");
                productCardImg.src = product._image();
                productCardImg.alt = product._name();
                //Se crea un elemento div para la card
                const productCardBody = document.createElement("div");
                productCardBody.classList.add("card-body");
                //Se crea un elemento h5 para la card
                const productCardTitle = document.createElement("h5");
                productCardTitle.classList.add("card-title");
                productCardTitle.textContent = product._name();
                //Se crea un elemento p para la card
                const productCardDescription = document.createElement("p");
                productCardDescription.classList.add("card-text");
                productCardDescription.textContent = product._description();
                //Se crea un elemento p para la card
                const productCardPrice = document.createElement("p");
                productCardPrice.classList.add("card-text");
                productCardPrice.textContent = "Precio: "+product._price()+" USD";
                //Se crea un elemento a para la card
                const productCardBtn = document.createElement("a");
                productCardBtn.classList.add("btn");
                productCardBtn.classList.add("btn-primary");
                productCardBtn.href = "#";
                productCardBtn.textContent = "Agregar al carrito";
                //Se agregan los elementos a la card
                productCardBody.appendChild(productCardTitle);
                productCardBody.appendChild(productCardDescription);
                productCardBody.appendChild(productCardPrice);
                productCardBody.appendChild(productCardBtn);
                productCard.appendChild(productCardImg);
                productCard.appendChild(productCardBody);
                //Se agrega la card al contenedor de productos
                productsContainer.appendChild(productCard);
            }
            //Se obtiene la clase horus-container__main-pagination
            const paginationContainer = document.querySelector(
                ".horus-container__main-pagination"
            );
            //Ver si hay elementos en el contenedor de paginacion
            if (paginationContainer.hasChildNodes()) {
                //Se eliminan los elementos del contenedor de paginacion
                while (paginationContainer.firstChild) {
                    paginationContainer.removeChild(paginationContainer.firstChild);
                }
            }

        
            //Se crea un elemento nav para la paginacion
            const paginationNav = document.createElement("nav");
            paginationNav.setAttribute("aria-label","Page navigation example");
            //Se crea un elemento ul para la paginacion
            const paginationUl = document.createElement("ul");
            paginationUl.classList.add("pagination");
            //Se crea un elemento li para la paginacion
            const paginationLiPrev = document.createElement("li");
            paginationLiPrev.classList.add("page-item");
            //Se crea un elemento a para la paginacion
            const paginationLinkPrev = document.createElement("a");
            paginationLinkPrev.classList.add("page-link");
            paginationLinkPrev.href = "#";
            paginationLinkPrev.setAttribute("aria-label","Previous");
            //Se crea un elemento span para la paginacion
            const paginationSpanPrev = document.createElement("span");
            paginationSpanPrev.setAttribute("aria-hidden","true");
            paginationSpanPrev.textContent = "«";
            //Se crea un elemento span para la paginacion
            const paginationSpanPrev2 = document.createElement("span");
            paginationSpanPrev2.classList.add("sr-only");
            paginationSpanPrev2.textContent = "Previous";
            //Se agregan los elementos a la paginacion
            paginationLinkPrev.appendChild(paginationSpanPrev);
            paginationLinkPrev.appendChild(paginationSpanPrev2);
            paginationLiPrev.appendChild(paginationLinkPrev);
            paginationUl.appendChild(paginationLiPrev);
            //Se itera para crear los elementos de la paginacion
            for (let i = 1; i <= Math.ceil(countProductsByCategory/10); i++) {
                //Se crea un elemento li para la paginacion
                const paginationLi = document.createElement("li");
                paginationLi.classList.add("page-item");
                //Se crea un elemento a para la paginacion
                const paginationLink = document.createElement("a");
                paginationLink.classList.add("page-link");
                //Se agrega un id al elemento a para la paginacion
                paginationLink.id = i;
                
                // -> /category/:id
                paginationLink.href = "/"+category+"/"+i;
                paginationLink.textContent = i;
                //Se agregan los elementos a la paginacion
                paginationLi.appendChild(paginationLink);
                paginationUl.appendChild(paginationLi);
            }
            //Se crea un elemento li para la paginacion
            const paginationLiNext = document.createElement("li");
            paginationLiNext.classList.add("page-item");
            //Se crea un elemento a para la paginacion
            const paginationLinkNext = document.createElement("a");
            paginationLinkNext.classList.add("page-link");
            paginationLinkNext.href = "#";
            paginationLinkNext.setAttribute("aria-label","Next");
            //Se crea un elemento span para la paginacion
            const paginationSpanNext = document.createElement("span");
            paginationSpanNext.setAttribute("aria-hidden","true");
            paginationSpanNext.textContent = "»";
            //Se crea un elemento span para la paginacion
            const paginationSpanNext2 = document.createElement("span");
            paginationSpanNext2.classList.add("sr-only");
            paginationSpanNext2.textContent = "Next";
            //Se agregan los elementos a la paginacion
    
            paginationLinkNext.appendChild(paginationSpanNext2);
            paginationLinkNext.appendChild(paginationSpanNext);
            paginationLiNext.appendChild(paginationLinkNext);
            paginationUl.appendChild(paginationLiNext);
            //Se agregan los elementos a la paginacion
            paginationNav.appendChild(paginationUl);
            paginationContainer.appendChild(paginationNav);

            //Se obtiene el header de la pagina
            const header = document.querySelector(".horus-container__header");
            //Ver si hay elementos en el header
            if (header.hasChildNodes()) {
                //Se eliminan los elementos del header
                while (header.firstChild) {
                    header.removeChild(header.firstChild);
                }
            }
            //Se crea un elemento div para el header
            const headerTitle = document.createElement("div");
            headerTitle.classList.add("horus-container__header-title");
            //Se crea un elemento h1 para el header
            const headerTitleText = document.createElement("h1");
            headerTitleText.classList.add("horus-container__header-title-text");
            headerTitleText.textContent = category;
            //Se agregan los elementos al header
            headerTitle.appendChild(headerTitleText);
            header.appendChild(headerTitle);


            
            
        } catch (error) {
            console.log(error);
        }
    } 


  }

  export default Producto;