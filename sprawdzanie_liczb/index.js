function check(){ //zawsze trzeba podpiąć funkcję do zdarzenia, w tym przypadku onclick
    var liczba = document.getElementById("id").value; //document.getElementById("id") = uchwyt, .value = wartość, var liczba = pobieranie wartości z inputa HTML.
    if (liczba>0){
        document.getElementById("check").innerHTML = "Liczba jest dodatnia.";
    }
    else if (liczba<0){
        document.getElementById("check").innerHTML = "Liczba jest ujemna.";
    }
    else if (liczba==0){
        document.getElementById("check").innerHTML = "Liczba jest równa zero.";
    }
    else {
        document.getElementById("check").innerHTML = "Podany przykład nie jest liczbą!";
    }
}