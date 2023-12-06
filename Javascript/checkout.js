let purchased = JSON.parse(localStorage.getItem('cart'))
const body = document.querySelector("#body")
console.log(purchased)

let money = purchased.map((e)=>{
    return e.price
})
console.log(money)

let cash = money.reduce((acc, e)=>{
    return acc + e
})
console.log(cash)

let test = purchased.map((e)=>{
    console.log([e.quantity])
    return e.quantity
})

let res = test.reduce((a, e)=>{
    return a + e
})
console.log(res)
function jodi(){
    purchased.forEach((item, i)=>{
        body.innerHTML += `
        <tr>
        <td><i class='bx bx-x-circle'></i><a href="#"></a></td>
        <td><img src="${item.url}" alt=""></td>
            <td>${item.name}</td>
            <td>R${item.price}</td>
            <td><input type="number" >${item.quantity}</td>
            <td>${item.quantity * item.price}</td>
            <td></td>
            <td>${cash * res/2}</td>
        
            </tr>
        `
    })
}

jodi()