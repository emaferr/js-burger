// Creare lista di ingredienti e assegnare prezzo a ciascuno e genero gli input
function generaInput(lista, elemento) {
    contatore = 0;
    while ( contatore < lista.length) {
        
       elemento.insertAdjacentHTML('beforeend', 
        `
        <div class="form-group col-6">
        <img width="50" class="img-fluid" src="./assets/img/${lista[contatore][0] + '.svg'}">
                <label class="px-3 font-weight-bold" for="${lista[contatore][0]}">${lista[contatore][0]}</label>
                <input type="checkbox" name="${lista[contatore][0]}" id="${lista[contatore][0]}" data-price="${lista[contatore][1]}">
                <span style="color: #D33359;" class="px-2">add</span>
        </div>
        `
        );
        
        contatore++
    }
}