createDiv();
function createDiv (){
  for(var i = 0;i<20;i++){
    var div = document.createElement("div");
    var r = Math.floor(Math.random()*50+300);
    div.style.height = r+"px";
    div.classList.add("item");
    div.innerHTML = i+" box";
    document.body.appendChild(div);
  }
  change();
}

function findMin(array){
  var m = 0;
  for(var i = 0;i<array.length;i++){
    m = Math.min(array[m],array[i])==array[m]?m:i;
  }
  return m;
}
function change (){
  var divs = document.querySelectorAll(".item");
  var wcw = document.documentElement.clientWidth;
  var n = Math.floor(wcw/210);
  if(n<0) return;
  var t = 0;
  var c = (wcw - n*210)/2;//居中
  var arrH = [];
  for(var i = 0;i<arrH.length;i++){
    var j = i % n;
    // 摆满一行
    if(arrH.length == n){
      var min = findMin(arrH);
      divs[i].style.left = c+min*210+"px";
      divs[i].style.top = arrH[min]+10+"px";
      arrH[min]+=divs[i].offsetHeight + 10;
    }
    else{
      arrH[j]=divs[i].offsetHeight;
      divs[i].style.left = c +200*j+10*j+"px";
      divs[i].style.top = 0;
    }
  }
}

window.onresize = function(){
  change();
};
window.onload = function(){
  change();
};
window.onscroll = function(){
  var bodyHeight = document.documentElement.offsetHeight;
  var windowHeight = document.documentElement.clientWidth;
  var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
  var scrollHeight = document.body.scrollHeight;
  if(bodyHeight+windowHeight > scrollHeight- 20){
    createDiv();
  }
};
