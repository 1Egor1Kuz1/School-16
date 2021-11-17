let a;
function show_hide(){
    if (a==1){
        document.getElementById("hide_text").style.display="inline";
        return a=0;
    }
    else{
        document.getElementById("hide_text").style.display="none";
        return a=1;
    }
}
