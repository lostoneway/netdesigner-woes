//This is where you put the code that reaches out to the server to send info back and forth
//Info can travel back and forth using fetches example shown below all highlighted and commented out as one
console.log("connected")

// const deleteText = document.querySelectorAll('.bi-trash')
// const thumbText = document.querySelectorAll('.fa-thumbs-up')

// Array.from(deleteText).forEach((element)=>{
//     element.addEventListener('click', deleteWoe)
// })

// Array.from(thumbText).forEach((element)=>{
//     element.addEventListener('click', addLike)
// })

// async function deleteWoe(){
//     const userName = this.parentNode.childNodes[1].innerText
//     const userIssue = this.parentNode.childNodes[3].innerText
//     const userWisheS = this.parentNode.childNodes[5].innerText
//     const userActionTaken = this.parentNode.childNodes[7].innerText
//     const userSolution = this.parentNode.childNodes[9].innerText
//     try{
//         const response = await fetch('deleteWoe', {
//             method: 'delete',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({
//               'name': userName,
//               'issue': userIssue,
//               'wishes': userWisheS,
//               'actionTaken': userActionTaken,
//               'solution': userSolution
//             })
//           })
//         const data = await response.json()
//         console.log(data)
//         location.reload()

//     }catch(err){
//         console.log(err)
//     }
// }

// async function addLike(){
//     const sName = this.parentNode.childNodes[1].innerText
//     const bName = this.parentNode.childNodes[3].innerText
//     const tLikes = Number(this.parentNode.childNodes[5].innerText)
//     try{
//         const response = await fetch('addOneLike', {
//             method: 'put',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({
//               'stageNameS': sName,
//               'birthNameS': bName,
//               'likesS': tLikes
//             })
//           })
//         const data = await response.json()
//         console.log(data)
//         location.reload()

//     }catch(err){
//         console.log(err)
//     }
// }