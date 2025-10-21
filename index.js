function greet(userName) {
    event.preventDefault();
    if(!userName){
        document.getElementById("title").innerHTML = `Hello`;
    }
    else{
        document.getElementById("title").innerHTML = `Hello, ${userName}`;
    }
}
function changecolor(boxID){
    const box =document.getElementById(boxID);
    if( boxID === "box1"){
        box.style.backgroundColor="red";
    }else if(boxID === "box2"){
        box.style.backgroundColor="green";
    }else if(boxID === "box3"){
        box.style.backgroundColor="blue";
    }else if(boxID === "box4"){
        box.style.backgroundColor="yellow";
    }
}