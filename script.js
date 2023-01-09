function valueButton(e){
    calculator.list.value += e.value;
}

function clear(){
    calculator.list.value = null;
}
function calculate(){
    calculator.list.value = eval(calculator.list.value);
}