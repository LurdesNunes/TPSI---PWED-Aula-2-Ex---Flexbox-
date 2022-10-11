function flex(valor){
    document.getElementById('container').style.flexDirection=valor;
}
function wrap(valor){
    document.getElementById('container').style.flexWrap=valor;
}
function align(valor){
    document.getElementById('container').style.alignItems=valor;
}
function slide(){
    document.getElementById('publicidade').src="../html/email.png";
    document.getElementById('descricao').innerHTML="email";
    setTimeout("slide2()", 2000)
}
function slide2(){
    document.getElementById('publicidade').src="../html/imc.png";
    document.getElementById('descricao').innerHTML="imc";
    setTimeout("slide3()", 2000)
}
function slide3(){
    document.getElementById('publicidade').src="../html/isla.png";
    document.getElementById('descricao').innerHTML="isla";
    setTimeout("slide()", 2000)
}