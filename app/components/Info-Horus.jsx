//Componente que muestra columnas de información

/* Se basa en el siguiente codigo de html para replicarlo en react

<div class = "horus-container__info">
            <!-- Columna 1 -->
            <div class = "horus-container__info-column">
                <img class = "horus-container__info-column-img" src = "https://via.placeholder.com/500" alt = "info1">
                <h1 class = "horus-container__info-column-title">Envios</h1>
                <p class = "horus-container__info-column-description">Envios a todo el pais</p>
            </div>
            <!-- Columna 2 -->
            <div class = "horus-container__info-column">
                <img class = "horus-container__info-column-img" src = "https://via.placeholder.com/500" alt = "info2">
                <h1 class = "horus-container__info-column-title">Garantia</h1>
                <p class = "horus-container__info-column-description">Garantia de 30 dias</p>
            </div>
            <!-- Columna 3 -->
            <div class = "horus-container__info-column">
                <img class = "horus-container__info-column-img" src = "https://via.placeholder.com/500" alt = "info3">
                <h1 class = "horus-container__info-column-title">Pago</h1>
                <p class = "horus-container__info-column-description">Pago con tarjeta de credito</p>
            </div>
            <!-- Columna 4 -->
            <div class = "horus-container__info-column">
                <img class = "horus-container__info-column-img" src = "https://via.placeholder.com/500" alt = "info4">
                <h1 class = "horus-container__info-column-title">Soporte</h1>
                <p class = "horus-container__info-column-description">Soporte 24/7</p>
            </div>
            <!-- Columna 5 -->
            <div class = "horus-container__info-column">
                <img class = "horus-container__info-column-img" src = "https://via.placeholder.com/500" alt = "info5">
                <h1 class = "horus-container__info-column-title">Seguridad</h1>
                <p class = "horus-container__info-column-description">Pagos seguros</p>
            </div>
            <!-- Columna 6 -->
            <div class = "horus-container__info-column">
                <img class = "horus-container__info-column-img" src = "https://via.placeholder.com/500" alt = "info6">
                <h1 class = "horus-container__info-column-title">Calidad</h1>
                <p class = "horus-container__info-column-description">Productos de calidad</p>
            </div>
        </div>
        */

//Sin ocupar bootstrap

const InfoHorus = () => {
    return (
        <div className = "horus-container__info">
            <div className = "horus-container__info-column">
                <img className = "horus-container__info-column-img" src = "./../src/assets/img/c1.png" alt = "info1"/>
                <h1 className = "horus-container__info-column-title">Envios</h1>
                <p className = "horus-container__info-column-description">Envios a todo el pais</p>
            </div>
            <div className = "horus-container__info-column">
                <img className = "horus-container__info-column-img" src = "./../src/assets/img/c2.png" alt = "info2"/>
                <h1 className = "horus-container__info-column-title">Garantia</h1>
                <p className = "horus-container__info-column-description">Garantia de 30 dias</p>
            </div>
            <div className = "horus-container__info-column">
                <img className = "horus-container__info-column-img" src = "./../src/assets/img/c3.png" alt = "info3"/>
                <h1 className = "horus-container__info-column-title">Pago</h1>
                <p className = "horus-container__info-column-description">Pago con tarjeta de credito</p>
            </div>
            <div className = "horus-container__info-column">
                <img className = "horus-container__info-column-img" src = "./../src/assets/img/c4.png" alt = "info4"/>
                <h1 className = "horus-container__info-column-title">Soporte</h1>
                <p className = "horus-container__info-column-description">Soporte 24/7</p>
            </div>
            <div className = "horus-container__info-column">
                <img className = "horus-container__info-column-img" src = "./../src/assets/img/c5.png" alt = "info5"/>
                <h1 className = "horus-container__info-column-title">Seguridad</h1>
                <p className = "horus-container__info-column-description">Pagos seguros</p>
            </div>
            <div className = "horus-container__info-column">
                <img className = "horus-container__info-column-img" src = "./../src/assets/img/c6.png" alt = "info6"/>
                <h1 className = "horus-container__info-column-title">Calidad</h1>
                <p className = "horus-container__info-column-description">Productos de calidad</p>
            </div>
        </div>
    )
}

export default InfoHorus
