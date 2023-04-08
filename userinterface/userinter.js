function opensection(elm,cls){
    var con = document.getElementsByClassName(cls);
    for(let i=0; i< con.length;i++){
        con[i].style.display="none"
    }
    document.getElementById(elm).style.display="block";
}