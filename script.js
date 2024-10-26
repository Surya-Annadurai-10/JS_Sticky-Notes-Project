let color = document.querySelector("#color");
let btn = document.querySelector("#add-button");
let textarea = document.querySelector("#textarea");
let container = document.querySelector(".notes-container");
let para = document.querySelector(".para");
let right = document.querySelector(".right");
let clear = document.querySelector(".clear-button");

let num = 0;

clear.addEventListener("click", (event) => {
  document.querySelectorAll(".notes").forEach((value) => {
    value.remove();
  });
  num = 0;

  para.style.display ="block";
});

btn.addEventListener("click", (event) => {
  if (textarea.value == "") {
    alert("Please Enter Some Content!!");
    return;
  }

  let classnum = "note" + num;
  let notes = document.createElement("div");
  notes.classList.add("notes");
 
  notes.innerHTML = `
      <span class="x">X</span>
      <textarea  class = "note ${classnum}" name="text" rows="10" cols="24" placeholder="// Write some notes..." ></textarea>
    `;
  container.appendChild(notes);
  let notesText = document.querySelector(`.${classnum}`);
  para.style.display = "none";

  notesText.value = textarea.value;
  num++;
  notes.style.borderColor = color.value;
  textarea.value = "";
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("x")) {
    event.target.parentNode.remove();
    if(container.childNodes.length <=3){
      para.style.display = " block";
      }
  }

 
});

let cursor = {
  x: null,
  y: null,
};

let notes = {
  dom: null,
  x: null,
  y: null,
};

right.addEventListener("mousedown", (event) => {
  if (event.target.classList.contains("notes")) {
    cursor = {
      x: event.clientX,
      y: event.clientY,
    };

    notes = {
      dom: event.target,
      x: event.target.getBoundingClientRect().left,
      y: event.target.getBoundingClientRect().top,
    };
    console.table("notes x :" + notes.x);
    console.table("notes y :" + notes.y);
  }
});

right.addEventListener("mousemove", (event) => {
  if (notes.dom == null) return;
  let currentCursor = {
    x: event.clientX,
    y: event.clientY,
  };

  let distance = {
    x: currentCursor.x - cursor.x,
    y: currentCursor.y - cursor.y,
  };
  notes.dom.style.left = notes.x + distance.x + "px";
  notes.dom.style.top = notes.y + distance.y + "px";
  notes.dom.style.cursor = "grab";
});

right.addEventListener("mouseup", () => {
  if (notes.dom === null) return;
  notes.dom.style.cursor = "auto";
  notes.dom = null;
});

// let textarea = document.querySelector("#textarea");
// let btn = document.querySelector("#add-button");
// let color = document.querySelector("#color");
// let container = document.querySelector(".notes-container");
// let rightPara = document.querySelector(".para");

// btn.addEventListener("click" , () =>{
//    if (textarea.value === ""){
//     alert("Enter some text");
//     return;
//    }

//     let div = document.createElement("div");
//     let para = document.createElement("p");
//     let x = document.createElement("button");
//     div.setAttribute("draggable" , "true");
//     console.log(div);

//     div.appendChild(para);
//     div.appendChild(x);
//    //  console.log(div);
//     para.style.minWidth = "80%"
//     // para.style.minHeight = "5vh"
//     para.style.backgroundColor= "rgb(255, 255, 255, 0.5)";
//     rightPara.style.margin= "auto"
//     para.innerText = textarea.value;
//     para.style.padding = "0.8rem 1rem";
//     para.style.borderRadius = " 10px"
//      div.style.backgroundColor = color.value;
//     div.style.minWidth= "200px"
//     div.style.maxWidth ="100%"
//     div.style.minHeight = "200px"
//     div.style.maxHeight = "100%"
//     x.innerText = "x";
//    //  div.style.position="re";
//     x.style.display = "block";
//     div.style.display= "flex";
//     x.style.alignSelf = "flex-end";
//     div.style.flexDirection = "column-reverse"
//    div.style.justifyContent = "flex-end"
//    // div.style.padding = "0 1rem"
// // div.style.paddingTop = "3rem";
//    container.appendChild(div);
//    x.style.background ="transparent";
//    x.style.fontSize = "1.5rem";
//    x.style.padding = "0 0.2rem 0.2rem  0";
//    x.style.border = "none";
//    div.style.padding = "0.5rem";
//    textarea.value = "";

//    rightPara.style.display = "none";

//    x.addEventListener("click" , () => {
//      div.style.display= " none";
//    })

// });
