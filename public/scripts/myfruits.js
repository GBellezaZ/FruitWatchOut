import { ref, listAll, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js';
import { storage } from './index.js';

const storageRef = ref(storage, 'user1/');

var i = 1;
var m = 0;
var sad = ``;
let body = document.getElementById('principal-table');

listAll(storageRef)
  .then(function(result){
    result.items.forEach(function(imageRef){
      console.log("Image Reference :p " + imageRef.toString());
      i++;
      displayImage(i, imageRef);
    })
  })


function displayImage(numImg, images){
  getDownloadURL(images)
    .then((url) => {
      //let new_html = ``;
      if(m%5==0){
        sad += `<tr>`;
      }
      //sad += `<td>${numImg}</td><td><img src="${url}" width=256px style="float:right"></td>`;
      sad += `<td><img src="${url}" width=256px style="float:right"></td>`;
      if(m%5==4){
        sad += `</tr>`;
      }
      m++;
      //console.log(m, sad);
      if(m==15){
        body.innerHTML += sad;
      }
    });
}


      
      //let new_html = `
      //  <tr> 
      //    <td>
      //      ${row}
      //    </td>
      //    <td>
      //      <img src="${url}" width=100px style="float:right">
      //    </td>
      //  </tr>
      //`