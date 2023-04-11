// alert("hello world")


///        QUESTION 01     ///////////

// function clos(num1){
//     function any(num2){
//         console.log(num1+num2)
//     }
//      return any
// }
// let retrn=clos(5)
// retrn(7)





///        QUESTION 02     ///////////




//  function serch (arr,value){
// if(arr.lenght === 0 ){
//       return false
// }
// else if (arr[0]=== value){
// return true
// }
//  return serch(arr.slice(1),value)
//  }
//  let arr =[1,2,3,4,5]
//  console.log(serch(arr,1))




///        QUESTION 03     ///////////







// function add() {
//       let ad = document.getElementById("ad");
//       let user = prompt("enter para")
//       let doc = ad.innerText = user
//       document.write(doc)
// }








///        QUESTION 04     ///////////



// function add(val) {
//       let list = document.createElement("ul");
// list.setAttribute("id","ul")
// document.body.appendChild(list)
//       let li = document.createElement("li");
//       let txt = document.createTextNode(val);
//       li.appendChild(txt)
//       document.getElementById("ul").appendChild(li)

// }

// add("mango")
// add("apple")







///        QUESTION 05     ///////////


//       
// function backColor(target, color) {
//       target.style.backgroundColor = color;
//     }
//     let backGround = document.querySelector("#para");
//     backColor(backGround, "red");






        ///        QUESTION 06    ///////////


// let arr = [];
// function local(key, obj) {
//       let data = {
//             name: "idrees"
//       }
//       arr.push(data)
//       console.log(arr)
//       let stringify = JSON.stringify(obj)
//       localStorage.setItem(key, stringify)
// }

// local("key", arr)




         ///        QUESTION 07     ///////////



      //    let userData = localStorage.getItem("key");
      //    let check = userData ? JSON.parse(userData) : [];
         
      //    function storing(name) {
      //      let Data = {
      //        name: "idrees khan",
      //        email:"midreeskhan7276@gmail" ,
      //      };
      //      check.push(Data);
      //      let stringify = JSON.stringify(check);
      //      localStorage.setItem("key", stringify);
      //      console.log(check);
      //    }
      //    storing(check);

      

         ///        QUESTION 08     ///////////





      // function saveStorage(obj) {
      //       for (const [key, value] of Object.entries(obj)) {
      //         localStorage.setItem(key, JSON.stringify(value));
      //       }
          
      //       const newObj = {};
      //       for (let i = 0; i < localStorage.length; i++) {
      //         const key = localStorage.key(i);
      //         newObj[key] = JSON.parse(localStorage.getItem(key));
      //       }
      //       return newObj;
      //     }
      //     let save =saveStorage({ name: "idrees khan", age: 23 });

      //     console.log(save);