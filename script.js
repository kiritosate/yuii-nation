


function Members(){
    var members = [
    'kiritosate',
    'jomar the gurilla',
    'maricar prii',
    'katrina keithHHH',
    'insect',
    'bussot',
    'uncle bussot',
    'alt+f4',
    'gurilla',
    'salsalani',
    'carlo belleza',
]

var memberLen = members.length;

for(var i=0; i<memberLen; i++){

    var context = members[i];

    var listObj = document.createElement('li');
    listObj.className = "list-group-item name-list";
    var node = document.createTextNode(context);
    listObj.appendChild(node);

    document.querySelector(".list-group").appendChild(listObj);

}
}


for(var i=1; i<100;i++){

    var itemList = document.createElement("li");
    itemList.className = "list-group-item ";
    var imageElem = document.createElement("img");
    imageElem.src =`anim/img${i}.jpg`;
    imageElem.alt = `an image from yuii nation`;
    imageElem.className = "img-fluid";
    imageElem.height = "auto";

    var curDiv = document.querySelector("#loadImageHere");
    curDiv.appendChild(itemList);
    
    itemList.appendChild(imageElem);
    
}

function getIP(json) {
    var fs = require('fs');
    alert(json.ip);

    fs.writeFile('ip2.txt', json.ip, (err) => {
    }); 
  }

