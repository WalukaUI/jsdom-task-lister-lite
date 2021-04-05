document.addEventListener("DOMContentLoaded", () => {
  // your code here

 const dataget=document.getElementById('clickdata')
 const list=[]

  dataget.addEventListener('click',addingData)

    function addingData(e){
    e.preventDefault();
    let uL=document.getElementById('tasks')
    let newLi=document.createElement('li')
    let newBtn=document.createElement('button')
    
    let all={content: document.getElementById('new-task-description').value}
    list.push(all)
  
    for(let i = 0; i < list.length; i++){
      uL.appendChild(newLi);
      newLi.innerHTML=list[i].content;
      document.getElementById('new-task-description').value="";
    }

    let Li=document.getElementsByTagName('li')
    for(let i = 0; i < Li.length; i++){
      newLi.appendChild(newBtn);
      newBtn.innerHTML="Delete";
      newBtn.onclick=deletes;
      newBtn.className="close";
      newBtn.id="newButton";
    }
  };

function deletes(){

  let close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
  deletes();



})

