let prod = JSON.parse(localStorage.getItem('products'));
const body = document.querySelector("#body");



console.log(prod)
function display(){
  prod.forEach((item, i)=>{
    body.innerHTML += `
    <tr>
           <td>${item.id}</td>
           <td><img src="${item.url}" alt=""></td>
           <td>${item.name}</td>
           <td>R${item.price}</td>
           <td>${item.description}</td>
            <td></td>
            <td><button class="normal edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button><button class="normal delete">Delete</button></td>
         </tr>

         `
  })
  document.querySelectorAll('.edit-btn').forEach((editBtn, index) => {
    editBtn.addEventListener('click', () => {
      
      populate(prod[index]);
    });
  });
}


function populate(item) {

  item.name = document.querySelector('.Nick').value  
  item.description = document.querySelector('.des').value 
  item.price = document.querySelector('.money').value 
  item.url = document.querySelector('.pic').value 
}


display()




 