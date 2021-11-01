
//The user interface when the user hovers on the elements of the navbar

function visib(num){
    var myDiv=document.createElement('div');
    myDiv.className='nb';
    document.getElementsByClassName('LI')[num].appendChild(myDiv);
}

function invisib(n){
    var Div=document.getElementsByClassName('LI')[n];
    Div.removeChild(Div.lastChild);
}    