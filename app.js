function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('datetime').innerHTML =today.toLocaleString();
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10)
     {
         i = "0" + i
        };  
    return i;
  }


  

var list=document.getElementById("list");

function addTask(){
var task=document.getElementById("todo");

//list

var li=document.createElement("li")
var liText=document.createTextNode(task.value)
li.setAttribute("class","line")
li.appendChild(liText);

//delete btn

var delBtn=document.createElement("button")
var btnText=document.createTextNode("Delete")
delBtn.setAttribute("class","dbtn")
delBtn.setAttribute("onclick","delItem(this)")
delBtn.appendChild(btnText);

//edit btn

var editBtn=document.createElement("button")
var editText=document.createTextNode("Edit")
editBtn.setAttribute("class","dbtn")
editBtn.setAttribute("onclick","editItem(this)")
editBtn.appendChild(editText);

li.appendChild(delBtn)
li.appendChild(editBtn)
 

list.appendChild(li);
task.value=" ";
}


function delItem(e){
e.parentNode.remove();
}


function delAll(e){
   list.innerHTML=" ";
    }


    function editItem(e){
        var value= e.parentNode.firstChild.nodeValue;
        var update= prompt("Update the task",value)
        e.parentNode.firstChild.nodeValue =update
    }


    function check(){
      var text=document.getElementById("todo");
      if(!text.value || text.value ==0){
        alert("Please Add Task");
        return (false);
      }
addTask();
}