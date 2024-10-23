let textarea = document.querySelector("#textarea");
let btn = document.querySelector("#add-button");
let color = document.querySelector("#color");
let container = document.querySelector(".notes-container");
let rightPara = document.querySelector(".para");


btn.addEventListener("click" , () =>{
   if (textarea.value === ""){
    alert("Enter some text");
    return;
   }

    let div = document.createElement("div");
    let para = document.createElement("p");
    let x = document.createElement("button");

    div.appendChild(para);
    div.appendChild(x);
   //  console.log(div);
    para.style.minWidth = "80%"
    // para.style.minHeight = "5vh"
    para.style.backgroundColor= "rgb(255, 255, 255, 0.5)";
    rightPara.style.margin= "auto"
    para.innerText = textarea.value;
    para.style.padding = "0.8rem 1rem";
    para.style.borderRadius = " 10px"
     div.style.backgroundColor = color.value; 
    div.style.minWidth= "200px"
    div.style.maxWidth ="100%"
    div.style.minHeight = "200px"
    div.style.maxHeight = "100%"
    x.innerText = "x";
    div.style.position="relative"
    x.style.position ="absolute";
    x.style.right= "5px";
    x.style.top = "5px";
    x.style.background = "transparent";
    x.style.border = "none";
    x.style.fontSize= "1.5rem"
   div.style.padding = "0 1rem"
div.style.paddingTop = "3rem";
   container.appendChild(div);
   
   textarea.value = "";

   rightPara.style.display = "none";
  
   x.addEventListener("click" , () => {
     div.style.display= " none";
   })

});


