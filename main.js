const display = document.getElementById("display");
function append(input){
    display.value= display.value+input;

}

function calculate(){
    try{
        display.value= eval(display.value);
    }catch(error){
        display.value=  'Error';
        console.log(error);
    }
    
}

function clickc(){
    display.value=  '0';
}