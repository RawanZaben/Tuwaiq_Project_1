//تعريف 
const mainContainer = $("#mainContainer");
const nameInput = $("#name");
const imgInput = $("#img");
const linkInput = $("#link");
const divone = $("#div1")

// اخفاء البوتن " الاظافه " و اظهاره   
divone.hide()
function hideHandler() {
    divone.hide()
}
 function showHandler() {
    divone.show()
 }
// مصفوفه في ابوجكت تمثل لي قاعده البايانات  
const sarray = [
    { Name: " كتاب فن اللامبالاة", img: "https://2u.pw/IDd3S", link: "https://2u.pw/RRq3X" },
    { Name: "كتاب الرقص مع الحياه ", img: "https://2u.pw/tM6ZN", link: "hhttps://2u.pw/o44Pf" },  
  { Name: " كتاب نظرية الفستق", img: "https://2u.pw/yHtqM", link: "https://2u.pw/lkW7f" },
  { Name: "جل منظف لبشرة", img: "https://2u.pw/MeTXv", link: "https://2u.pw/d6Ss0" },
  { Name: "تونيك مقشر", img: "https://2u.pw/pzMNb", link: "https://2u.pw/Diyut" },
  { Name: "مصل فيتامين ج", img: "https://2u.pw/yhWQO", link: "https://2u.pw/NKRpe" },
  { Name: "فستان", img: "https://2u.pw/wgl4M", link: "https://2u.pw/xOA3l" },
  { Name: " فستان أبيض", img: "https://2u.pw/bEkxX", link: "https://2u.pw/d6Ss0" },
  { Name: "فستان أحمر", img: "https://2u.pw/bVXuA", link:"https://2u.pw/ZqnwO" },

];

// 
function renderArr(array) {
  for (let i = 0; i < array.length; i++) {
    const div =
     $(`<div class="secondryContainer">
        <img id="imgg"src=${array[i].img} alt="Flowers in Chania">
        <h1>${array[i].Name}</h1>
        <a href=${array[i].link}> ربط المنتج </a,<br><br>
         <p>
        <button> تعديل </button>
        <button> حذف </button>
        <br><br>
</div>`);
    mainContainer.append(div);
  }
}
renderArr(sarray);

function add() {
  const newadd= {
    Name: nameInput.val(),
    img: imgInput.val(),
    link: linkInput.val(),
  };
  sarray.unshift(newadd);
  renderArr([newadd]);
}
