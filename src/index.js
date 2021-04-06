
document.addEventListener("DOMContentLoaded", () => {

  const submitValue=document.getElementById('clickdata')
  const pullValue=document.getElementById('new-task-description')

  const processingValue=submitValue.addEventListener('click',function(e){
    e.preventDefault()
    let values=[]
    values.push(pullValue.value);
    let uL=document.getElementById('tasks')
    let lI=document.createElement('li')
    let newBtn=document.createElement('button')
    
    for(let i=0;values.length>i;i++){
    uL.appendChild(lI)
    lI.innerHTML=values[i]
    lI.appendChild(newBtn);
    newBtn.innerHTML="Delete"
    newBtn.className="close"
    newBtn.onclick=deleteList;
    pullValue.value=""
    }
  })

  const deleteList= function(e){
    let close = document.getElementsByClassName("close")
    for(let i=0;close.length>i;i++)
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
 
  }

})

//////////////////////////////////////////////////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded", () => {
//   // your code here

//  const dataget=document.getElementById('clickdata')
//  const list=[]

//   dataget.addEventListener('click',addingData)

//     function addingData(e){
//     e.preventDefault();
//     let uL=document.getElementById('tasks')
//     let newLi=document.createElement('li')
//     let newBtn=document.createElement('button')
    
//     let all={content: document.getElementById('new-task-description').value}
//     list.push(all)
  
//     for(let i = 0; i < list.length; i++){
//       uL.appendChild(newLi);
//       newLi.innerHTML=list[i].content;
//       document.getElementById('new-task-description').value="";
//     }

//     let Li=document.getElementsByTagName('li')
//     for(let i = 0; i < Li.length; i++){
//       newLi.appendChild(newBtn);
//       newBtn.innerHTML="Delete";
//       newBtn.onclick=deletes;
//       newBtn.className="close";
//       newBtn.id="newButton";
//     }
//   };

// function deletes(){

//   let close = document.getElementsByClassName("close");
//   for (let i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       let div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }
//   deletes();

// })
