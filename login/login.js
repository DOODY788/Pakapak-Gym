function checkuser(){
    var username = document.getElementById("username").value;
    var password = document.getElementById('userpass').value;
    let list = ['nikhil','hegdenikhil']
    let i = 0
    if(list[i] == username && list[i+1]==password){
            alert('hurray you are logged in');
            window.location.replace("/gym/userinterface/userboard.html")
        }
}