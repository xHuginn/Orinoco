const panier = localStorage.getItem('panier')

console.log(panier);

function test(obj){

  // console.log(panier);

  // let tbody = document.getElementById('tbody');
  let tr = document.createElement('tr');
  Object.keys(obj).forEach(function (key) {

    // let nombre = parseInt(obj.number)

    // let prix = parseInt(obj.price)
    

//     let contenuDeLObjet = obj[key];
//   //   console.log(contenuDeLObjet);
//   td.textContent = `${contenuDeLObjet}`
//         // li.textContent = `${key} : ${nombre * prix}`
//       //   console.log(key);
//       tr.appendChild(td);
//   });
//     document.querySelector('#tbody').appendChild(tr);
// }
let td = document.createElement('td');
let contenuDeLObjet = obj[key];
//   console.log(contenuDeLObjet);
    // li.textContent = key + ' : ' + contenuDeLObjet;
    td.textContent = `${contenuDeLObjet}`
  //   console.log(key);
  tr.appendChild(td);
});
document.querySelector('#tbody').appendChild(tr);
}

function list (list) {
  for (let i = 0; i < list.length; i++) {
      test(list[i]);
  }
}

list(JSON.parse(panier));

// function totalTest() {

//   let total = 0

//   Object.keys(obj).forEach(function (key) {

//     let nombre = parseInt(obj.number)

//     let prix = parseInt(obj.price)

// });

//   total += `${product.number * product.price}`
  
// }
// totalTest()

// function listTest (listTest) {
//   for (let i = 0; i < listTest.length; i++) {
//     totalTest(listTest[i]);
//   }
// }

// listTest(JSON.parse(panier));


function azerty(obj){

  let ul = document.createElement('ul');
  let tr = document.createElement('tr');
  Object.keys(obj).forEach(function (key) {

    let nombre = parseInt(obj.number)

    let prix = parseInt(obj.price)
    let td = document.createElement('td');
    let li = document.createElement('li');
    let contenuDeLObjet = obj[key];
  //   console.log(contenuDeLObjet);
        // li.textContent = key + ' : ' + contenuDeLObjet;
        li.textContent = `${nombre * prix} €`
      //   console.log(key);
        ul.appendChild(li);
  });
    document.querySelector('body').appendChild(ul);
    // document.querySelector('#tbody').appendChild(tr);
}

function ytreza (ytreza) {
  for (let i = 0; i < ytreza.length; i++) {
    azerty(ytreza[i]);
  }
}

ytreza(JSON.parse(panier));



















// function totalPrice (obj) {

  
//   Object.keys(obj).forEach(function (key) {
 
//    let nombre = parseInt(obj.number)
 
//    let prix = parseInt(obj.price)
 
//    console.log(`${key} : ${nombre * prix}`);
//      });
//   }

//   function list (list) {
//    for (let i = 0; i < list.length; i++) {
//      totalPrice(list[i]);
//    }
//  }
 
//  list(JSON.parse(localStorage.getItem('panier')));
