let count = 0;
const counterHeader= document.getElementById('increment');
const countAddBtn = document.getElementById('add');
const countMinBtn = document.getElementById('minbtn');

countAddBtn.addEventListener("click", ()=>{
 count ++;
 counterHeader.innerHTML = count;
})

countMinBtn.addEventListener("click", ()=>{
    count --;
    counterHeader.innerHTML = count;
   })