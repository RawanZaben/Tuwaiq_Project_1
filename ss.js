//تعريف 
const mainContainer = $("#mainContainer");
const nameInput = $("#name");
const imgInput = $("#img");
const linkInput = $("#link");
const divone = $("#div1")

// Hide and show  botton   
divone.hide()       
function showHandler() {           // "يظهر بوتن "أضافه منتج   
  divone.show()
}
function hideHandler() {              // "يخفي بوتن "أضافه منتج
    divone.hide()
}

// array of objects    لحفظ البيانات وعرض البيانات عند فتح الموقع

const sarray = JSON.parse(localStorage.getItem("localAdd")) || [   // اذا كان في بيانات في لوكل يطلع  و اذا مافي يطلع مصفوفه  
    {id:0, Name: " كتاب فن اللامبالاة", img: "https://2u.pw/IDd3S", link: "https://2u.pw/RRq3X" },
    {id:1, Name: "كتاب الرقص مع الحياه ", img: "https://2u.pw/tM6ZN", link: "hhttps://2u.pw/o44Pf" },  
  { id:2,Name: " كتاب نظرية الفستق", img: "https://2u.pw/yHtqM", link: "https://2u.pw/lkW7f" },
  { id:3, Name: "جل منظف لبشرة", img: "https://2u.pw/MeTXv", link: "https://2u.pw/d6Ss0" },
  { id:4,Name: "تونيك مقشر", img: "https://2u.pw/pzMNb", link: "https://2u.pw/Diyut" },
  {id:5, Name: "مصل فيتامين ج", img: "https://2u.pw/yhWQO", link: "https://2u.pw/NKRpe" },
  { id:6,Name: "فستان", img: "https://2u.pw/wgl4M", link: "https://2u.pw/xOA3l" },
  { id:7, Name: " فستان أبيض", img: "https://2u.pw/bEkxX", link: "https://2u.pw/d6Ss0" },
  { id:8, Name: "فستان أحمر", img: "https://2u.pw/bVXuA", link:"https://2u.pw/ZqnwO" },

];

// fot loop to array of objects renderArr and 
//  function renderEr  , انشاء عناصر 

function renderArr(array) {
  for (let i = 0; i < array.length; i++) {
    const div =
     $(`<div class="divf">
        <img id="imgg"src=${array[i].img} alt="Flowers in Chania">
        <h1>${array[i].Name}</h1>
        <a href=${array[i].link}> رابط المنتج </a><br><br>
        <button class="but" id=""+${i}  onclick="dele(${i})"> حذف </button>
        <br><br>
       </div>`);
    mainContainer.append(div);
  }
  localStorage.setItem("localAdd", JSON.stringify(sarray));        // يدخل االمصفوفه في لوكل
  

}
renderArr(sarray);


// اسمح ليوز يدخل البيانات وتطلع 

function add() {
  const newadd= {
    Name: nameInput.val(),
    img: imgInput.val(),
    link: linkInput.val(),
    id: sarray.length,
  };
  sarray.unshift(newadd);
  mainContainer.html("");
  renderArr(sarray);
}

// االحذف  
function dele(id){
  sarray.splice(id,1)
  mainContainer.html("")
  renderArr(sarray);
}
