//chiediamo all'utente l'inserimento del nome e cognome
//chiediamo all'utente l'inserimento dei chilometri da percorrere
//chiediamo all'utente di scegliere il suo range di età
//se il tutto è inserito correttamente l'utente premendo sul tasto salva trasferisce i dati sul biglietto
//altrimenti premendo il tasto Cancel resetta tutto


let button = document.getElementById('save_data');

let standard_price
let name_surname
let distance_km
let age_range
let final_price

button.addEventListener('click', function(){
    name_surname = document.getElementById('name').value;
    console.log(name_surname)
    
    distance_km = document.getElementById('distance_km').value;
    console.log(distance_km)

    age_range = document.getElementById('age_range').value;
    console.log(age_range)

    const price_km = 0.21;
    basic_price = (distance_km * price_km);
    console.log(basic_price);

    if (age_range < 18){
        final_price = (basic_price * 0.8).toFixed(2);
        console.log(final_price);
    }
    
    else if (age_range >= 65){
        final_price = (basic_price * 0.6).toFixed(2);
        console.log(final_price);
    }

    else{
        final_price = basic_price.toFixed(2);
    }

    document.getElementById('name-pass').innerHTML ='Welcome On Board'+ " " + name_surname;
    document.getElementById('client_price').innerHTML ='Ticket Value' +" "+ final_price + "€";
    document.getElementById('client_name').innerHTML = name_surname;


})


function refresh(){
    window.location.reload("Refresh")
}



