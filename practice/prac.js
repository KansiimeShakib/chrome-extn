let box = document.getElementById("box")

box.addEventListener("click", function(){
          console.log("I want to open the box!")
}) 

// trial on template strings

const recipient = "James"
const sender = "Kansiime"

const email = `
                    Hey 
                    ${recipient}! 
                    How is it going? Cheers 
                    ${sender}
          
          `

console.log(email) 

const player = "Twaha"
const opponent = "Aisha"
const game = "cards"

let points = 0
let hasWon = false

points += 100
hasWon += true

if (hasWon) {
          console.log( `
                    ${player}  
                    got 
                    ${points} 
                    points and won the   
                    ${game}  
                    game!
          `)
} else {
          console.log(`
                    the winner is 
                    ${opponent}!  
                    ${player}  
                    lost the game
          `)
}
                 // these below are future courses to learn and improve on my designs
let myCourses = ["learn CSS animation", "UI Design Fundamentals", "Intr to clean code"]

function thatTakes(courses){
          for ( i=0; i<myCourses.length; i++){
                    console.log(courses[i])
          }
}
thatTakes("myCourses")

let myClasses = ["learn CSS animation", "UI Design Fundamentals", "Intr to clean code"]

function classTch(classes){
          for ( i=0; i<myClasses.length; i++){
                    localStorage.setItem("classes[i]", "p.sev")
                    let me = localStorage.getItem(classes[i])
                    console.log(me)
          }
}
classTch("myClasses")

// localStorage.setItem("myBeb", "Zahara")
let biiru = localStorage.getItem("myBeb")
console.log(biiru)

let data = [
          {
                    player:"Zahara",
                    score: "100"
          },
          {
                    player:"Shakib",
                    score:"95"
          }
]

let zahaBtn = document.getElementById("zaha-btn")

zahaBtn.addEventListener("click", function(){
          
          console.log(data[0].score)
})



function generateSentence(desc, arr){
          let baseString = `The ${arr.length} ${desc} are `
          const lastIndex = arr.length - 1
          for (i=0; i<arr.length; i++){
                    if (i === lastIndex){
                              baseString +=  arr[i]               
                    } else {
                              baseString +=  arr[i]+ ", "  
                    }
                    
          }
          return baseString
}
const sentence = generateSentence("highest mountain", ["mountain Everst", "k2"])
console.log(sentence)


const imgs = [
          "/practice/icon/m ug.png",
          "/practice/icon/d ug.jpg",
          "/practice/icon/n ug.jpg"
]

const container = document.getElementById("container")

function renderImages(){
          let imgDoM = ""
          for( i=0; i<imgs.length; i++ ){
                  imgDoM += `<img alt="Beauty of UG" class="team-img" src="${imgs [i]}">`  
          }
          container.innerHTML = imgDoM
}

renderImages()




























