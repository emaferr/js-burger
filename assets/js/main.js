// Invoca funzione generaInput
var ingredienti = [
    ['Cheese', '1.5'],
    ['Fried-egg', '2'],
    ['Mustard', '0.5'],
    ['Tomato', '1'],
    ['Lettuce', '1'],
    ['Ketchup', '0.5'],
]

var elementoIngredienti = document.querySelector('.ingredienti');
generaInput(ingredienti, elementoIngredienti);

// Ascoltiamo per il click sul pulsante generate
document.querySelector('button').addEventListener('click', function () { 

    // Definisco prezzo base per il panino
    var prezzoBase = 10.99;
    
    // Incremento prezzo panino quando un ingrediente viene selezionato 
    var aggiunta = document.querySelectorAll("input[type='checkbox']");
 
    var sommaIngredienti = null;
    for(var i = 0; i < aggiunta.length; i++) {
        var elemento = aggiunta[i];
        if(elemento.checked) {
            sommaIngredienti += Number(elemento.getAttribute('data-price'))
        }
    }

    // Definisco il prezzo totale
    var prezzoTotale = prezzoBase  + sommaIngredienti;
    
    // Creo array codi sconto
    var codiciSconto = [ "R5Ad4ERzMn" , "zJcdCcg3Pr" , "Y4hDCDAqdf"];
   
    // Richiamo il valore del codice inserito
    var codiceInserito = document.getElementById("sconto").value;
    
    // Determino la presenza dello sconto con un valore booleano se il valore e true applico lo sconto
    var sconto = codiciSconto.includes(codiceInserito);

    if (sconto == true) {
        prezzoTotale =  prezzoTotale - ((prezzoTotale * 10)/ 100 );
    }else {

    }

    console.log(sconto);
    
    
    document.getElementById("prezzo_finale").innerHTML = (new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR'}).format(prezzoTotale));
   
});
