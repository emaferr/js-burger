// Creare lista di ingredienti e assegnare prezzo a ciascuno e genero gli input
function generaInput(lista, elemento) {
    contatore = 0;
    while ( contatore < lista.length) {
        
       elemento.insertAdjacentHTML('beforeend', 
        `
        <div class="form-group">
        <img width="30" src="./assets/img/${lista[contatore][0] + '.svg'}">
                <label for="${lista[contatore][0]}">${lista[contatore][0]}</label>
                <input type="checkbox" name="${lista[contatore][0]}" id="${lista[contatore][0]}" data-price="${lista[contatore][1]}">
        </div>
        `
        );
        
        contatore++
    }
}