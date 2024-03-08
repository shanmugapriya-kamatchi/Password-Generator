

function generate(){
    let password="";
    const lenght=8;
    const chars="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#*!-_";
    for(let i=0;i<lenght;i++){
        const randomindex=Math.floor(Math.random()*chars.length);
        password+=chars[randomindex];
    }
    document.getElementById("result").textContent=password;
}