var arr={};
var divOuter=document.getElementById('gallery');
var divInner;
var hr;

for (var i=0; i<Object.keys(json).length; i++){
  arr[i] = [];
  divInner=document.createElement('div');
  divInner.id=i;
  divInner.className='colorfilter-base';
  for (var j=0; j<json[i].length; j++){
    img = document.createElement('img');
    img.setAttribute('src', json[i][j]);
    img.onclick =  function() {select(this)};
    img.className = 'fig';
    img.style.opacity = 1;
    divInner.appendChild(img);
  }
  divOuter.appendChild(divInner);
  hr=document.createElement('hr');
  divOuter.appendChild(hr);
}

function select(e) {
  let opacity=e.style.opacity;
  let src=e.src;
  let id=e.parentNode.id;
  if (opacity == 1){
    e.style.opacity=0.3;
    arr[id].push(src);
  }else{
    e.style.opacity=1;
    arr[id]=arr[id].filter(e => e !== src);
  }
};

function download(){
  var jsonString = JSON.stringify(arr, null, '\t');
  var blob = new Blob([jsonString], {type: 'application/json' });
  let link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = 'annotations.json';
  link.click();
};
