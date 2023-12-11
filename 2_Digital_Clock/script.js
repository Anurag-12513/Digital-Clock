

                        //getting time data 
// let value= setInterval(()=>{
//     let Time= new Date();
//     Time.getHours()
//     Time.getMinutes()
//     Time.getSeconds()
// },1000)


// document.getElementById("ShowBox").innerHTML=value;
// document.createElement("data").innerHTML=console.log(value)


// let date= new Date()

// console.log(date.toLocaleTimeString());


let digitalBox = document.querySelector(".ClockBox");

// setInterval(()=>{
//     let date= new Date()
//     // console.log(date.toLocaleTimeString())
//     digitalBox.innerHTML=date.toLocaleTimeString()
// },1000)

let hrs=document.getElementById('h')
let min= document.getElementById('m')
let sec = document.getElementById('sec')

setInterval(()=>{
     let date = new Date();
     hrs.innerHTML=(date.getHours()%12 <10?"0":"")+ date.getHours()%12
     min.innerHTML= (date.getMinutes() <10 ?"0" :"")+ date.getMinutes()
     sec.innerHTML=  (date.getSeconds() <10 ?"0":"")+ date.getSeconds()
},1000)


let date= currentTime