const text = document.getElementById("supplierDetails");
const addList = document.getElementById("addList");
const listValue = document.getElementById("lists");

// console.log(addList);
// console.log('====================================');
// console.log('text');
// console.log('====================================');
addList.addEventListener('click',()=>{
    console.log('clicked');
    console.log(text.value);
})

// addList.onclick(text.value);
let arrList = [];
addList.addEventListener("click", () => {
  text.value === "" ? null : arrList.push(text.value);
console.log('clicked');
console.log(text.value);
  text.value = "";
  show();
});


function show() {
  let code = "";
  arrList.forEach((list, i) => {
    code += `<div> ${list} </div>`;
  });

  listValue.innerHTML = code;
}


// const items = document.getElementById("itemsDetails");
// const addItems = document.getElementById("addItems");
// const itemValue = document.getElementById("items");

// let arrItems = [];
// addItems.addEventListener("click", () => {
//   items.value === "" ? null : arrItems.push(items.value);
//   items.value = "";
// //   show();
// });

// function show() {
//   let itemsName = "";
//   arrItems.forEach((items, i) => {
//     itemsName += `<div> ${items} </div>`;
//   });

//   itemValue.innerHTML = itemsName;
// }
