// chrome://extentions/

// let myLeads = `["www.awesomelead.com"]`

// myLeads = JSON.parse(myLeads)

// myLeads.push("www.google.com")
// myLeads = JSON.stringify(myLeads)

// console.log(typeof myLeads)
myLeads = []
oldLeads = []

let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const divEl =document.getElementById("div-el")

// localStorage.clear()
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage =  JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
      myLeads = leadsFromLocalStorage
      render(myLeads)    
}

tabBtn.addEventListener("click", function(){
          chrome.tabs.query({ active: true, currentWindow: true}, function(tabs){
                    myLeads.push(tabs[0].url) 
                    localStorage.setItem("myLeads", JSON.stringify(myLeads))
                    render(myLeads)
          })      
})


function render(leads){
          let listItems = ""
          for (i=0; i<leads.length; i++){
                    // listItems += "<li><a target=' _blank' href='" + myLeads + "'>" + myLeads[i] + "</a></li>"
                    listItems += `
                              <li>
                                        <a target=' _blank' href='${leads[i]}'>
                                                  ${leads[i]}
                                        </a>
                              </li>
                    `
                    // OR  this bellow apply in creating inner HTML
                    // const li = document.createElement("li")
                    // li.textContent = myLeads[i]
                    // ulEl.append(li)
          }
          ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick",function(){
          localStorage.clear()
          myLeads = []
          render(myLeads)

} )

inputBtn.addEventListener("click", function(){
          myLeads.push(inputEl.value)
          inputEl.value = ""
          localStorage.setItem("myLeads", JSON.stringify(myLeads) )
          render(myLeads)

})


//localstorage prac
// localStorage.setItem("myName", "Shaki")
// let name = localStorage.getItem("myName")
// console.log(name)
// localStorage.clear()
 


// const container = document.getElementById("container")
// container.innerHTML = "<button onclick='buy()'>BUY!</button>" 

// function buy(){
//           container.innerHTML += "<p>Thanks for buying</p>"
// }

            //FUNCTION PARAMETA PRAC

// const welcomeEl = document.getElementById("welcome-el")

//                  parameters
// function greetUser(phrase, name, emoji){
//           welcomeEl.textContent = `${phrase}, ${name} ${emoji} `
// }

//         arguments
// greetUser("Hey", "SK", "🤞")

// function add(firstSum, secSum){
//          return firstSum + secSum

// }
// console.log( add(3,4) )
// console.log( add(9,102) )

// function getFirst(arr) {
//           return arr[0]
// }

//  let firstCard = getFirst([10, 2, 5])
//  console.log(firstCard)

