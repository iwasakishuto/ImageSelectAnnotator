var json = {
  "0": [
    ".././static/images/Satoshi_Ohno/img03.jpg",
    ".././static/images/Satoshi_Ohno/img02.jpg",
    ".././static/images/Satoshi_Ohno/img01.jpg",
    ".././static/images/Satoshi_Ohno/img05.jpg",
    ".././static/images/Satoshi_Ohno/img04.jpg"
  ],
  "1": [
    ".././static/images/Kazunari_Ninomiya/img03.jpg",
    ".././static/images/Kazunari_Ninomiya/img02.jpg",
    ".././static/images/Kazunari_Ninomiya/img01.jpg",
    ".././static/images/Kazunari_Ninomiya/img05.jpg",
    ".././static/images/Kazunari_Ninomiya/img04.jpg"
  ],
  "2": [
    ".././static/images/Sho_Sakurai/img03.jpg",
    ".././static/images/Sho_Sakurai/img02.jpg",
    ".././static/images/Sho_Sakurai/img01.jpg",
    ".././static/images/Sho_Sakurai/img05.jpg",
    ".././static/images/Sho_Sakurai/img04.jpg"
  ],
  "3": [
    ".././static/images/Masaki_Aiba/img03.jpg",
    ".././static/images/Masaki_Aiba/img02.jpg",
    ".././static/images/Masaki_Aiba/img01.jpg",
    ".././static/images/Masaki_Aiba/img05.jpg",
    ".././static/images/Masaki_Aiba/img04.jpg"
  ],
  "4": [
    ".././static/images/Jun_Matsumoto/img03.jpg",
    ".././static/images/Jun_Matsumoto/img02.jpg",
    ".././static/images/Jun_Matsumoto/img01.jpg",
    ".././static/images/Jun_Matsumoto/img05.jpg",
    ".././static/images/Jun_Matsumoto/img04.jpg"
  ]
}
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
