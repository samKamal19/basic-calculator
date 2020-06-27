function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    return document.getElementById("history-value").innerText=num;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(num){
    var getValue =document.getElementById("output-value");
    // getValue.value();
    getValue.innerText += num;
    console.log(num)
    // if(num == ""){
        // document.getElementById("output-value").value = num;
        // alert('Input filed is empty');
    // } 
    // else {
    //    document.getElementById("output-value").value = getFormattedNumber(num);
}

function getFormattedNumber(num){
    if(num=="-"){
        return"";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function calculation(){

    var getValue =document.getElementById("output-value");
    // getValue.value;
var result = eval(getValue.innerText);
console.log(result)
    getValue.innerText = result;


}
function clearField(){
    var getValue =document.getElementById("output-value");
    getValue.innerText = '';

}
function backspace(){
    var getValue =document.getElementById("output-value");
    var result = getValue.innerText;
console.log(result)
    var backspace= result.slice(0,-1);
    //  alert(backspace)
     getValue.innerText = backspace;
}


function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
// var operator = document.getElementsByClassName("operator");
// for (var i = 0; i<operator.length; i++){
//     operator[i].addEventListener('click' ,function(){
//         if(this.id=="clear"){
//            printHistory("");
//            printOutput("");
//         }
//         else if(this.id=="backspace"){
//             var output=reverseNumberFormat(getOutput).toString();
//             if(output){
//                 output=output.substr(0, output.lenght-1);
//                 printOutput(output);
//             }
//         }
//         else{
//             var output=getOutput(output);
//             var history=getHistory();
//             if(output==""&&history!=""){
//                 if(isNaN(history[history.lenght-1])){
//                     history=history.substr(0,history.length-1);
//                 }
//             }
//             if(output !="" || history!=""){
//                 output = output==""?
//                 output:reverseNumberFormat(output);
//                 history=history.output();
//                 if(this.id=="="){
//                     var result = eval(history);
//                     printOutput(result);
//                     printHistory("");
//