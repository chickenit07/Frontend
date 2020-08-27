var mang = [
  {
    id: 1,
    anh:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/95694820_2596701250650902_4900824866061549568_n.jpg?_nc_cat=105&_nc_sid=174925&_nc_ohc=5ekRX8LriSAAX-upl9i&_nc_ht=scontent.fhan2-4.fna&oh=fd4a7d474bed2ef15ace10df10a9ed05&oe=5F633B28",
    ten: "Ky Phuong Anh",
    cmt: "Alo Alo",
  },
  {
    id: 2,
    anh:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/95694820_2596701250650902_4900824866061549568_n.jpg?_nc_cat=105&_nc_sid=174925&_nc_ohc=5ekRX8LriSAAX-upl9i&_nc_ht=scontent.fhan2-4.fna&oh=fd4a7d474bed2ef15ace10df10a9ed05&oe=5F633B28",
    ten: "Ky Anh",
    cmt: "Alo Alo",
  },
  {
    id: 3,
    anh:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/95694820_2596701250650902_4900824866061549568_n.jpg?_nc_cat=105&_nc_sid=174925&_nc_ohc=5ekRX8LriSAAX-upl9i&_nc_ht=scontent.fhan2-4.fna&oh=fd4a7d474bed2ef15ace10df10a9ed05&oe=5F633B28",
    ten: "Ky Phuong",
    cmt: "Alo Alo",
  },
  {
    id: 4,
    anh:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/95694820_2596701250650902_4900824866061549568_n.jpg?_nc_cat=105&_nc_sid=174925&_nc_ohc=5ekRX8LriSAAX-upl9i&_nc_ht=scontent.fhan2-4.fna&oh=fd4a7d474bed2ef15ace10df10a9ed05&oe=5F633B28",
    ten: "Phuong Anh",
    cmt: "Alo Alo",
  },
];
for (var i = 0; i < mang.length; i++) {
  var data = `<div class="row" id="row-${mang[i].id}">
    <img
      src="${mang[i].anh}",
      width="45px"
      style="margin-right: 10px;"
      alt=""
    />
    <b style="margin-right: 10px;">${mang[i].ten}</b>
    <span>${mang[i].cmt} toi ten la ${mang[i].ten}</span>
  </div>`;
  var newE = document.createElement('div'); //tao 1 the
  newE.innerHTML = data; //gan noi dung ben trong 1 the 
  var outer = document.getElementById('comment');
  outer.appendChild(newE);
}

