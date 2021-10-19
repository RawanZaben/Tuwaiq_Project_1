//تعريف 
const mainContainer = $("#mainContainer");
const nameInput = $("#name");
const imgInput = $("#img");
const linkInput = $("#link");
const divone = $("#div1")

// Hide and show  botton 
divone.hide()
function hideHandler() {
    divone.hide()
}
 function showHandler() {
    divone.show()
 }
// array of objects تمثل لي قاعده البايانات  
const sarray = [
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

// fot loop to array of objects
function renderArr(array) {
  for (let i = 0; i < array.length; i++) {
    const div =
     $(`<div class="divf">
        <img id="imgg"src=${array[i].img} alt="Flowers in Chania">
        <h1>${array[i].Name}</h1>
        <a href=${array[i].link}> رابط المنتج </a><br><br>
        <button class='deleteButton' id=""+${i}  onclick="dele(${i})"> حذف </button>
        <br><br>
       </div>`);

      //  $('#'+i).click(function(){ 
      //    console.log("hanan")
      //   dele(array[i].id)  
      // });
     
    mainContainer.append(div);
  }

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
// حذف 

function dele(id){
  //$(`${array[i].id}`).remove()
  console.log(id,"iddddd" )
  //const index= sarray.findIndex(x => x.id == id);
  sarray.splice(id,1)
  mainContainer.html("")
  renderArr(sarray);



}