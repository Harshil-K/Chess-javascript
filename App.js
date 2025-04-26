const gameBoard = document.querySelector("#gameBoard");
const playerDisplay = document.querySelector("#player");
const infoDisplay = document.querySelector("#infoDisplay");
const width = 8;
const startPieces = [

    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, 
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, 
    rook, knight, bishop, queen, king, bishop, knight, rook

] 


function createBoard(){
    startPieces.forEach((startPiece, i) =>{
        const square = document.createElement('div')
        square.classList.add('square')
        square.innerHTML = startPiece

        square.firstChild && square.firstChild.setAttribute('draggable', true)

        square.setAttribute('squareId', i)

        const row = Math.floor((63-i)/8)+1
        if(row % 2 === 0){
            square.classList.add(i%2 === 0 ? 'beige' : 'brown')
        }else{
            square.classList.add(i%2 === 0 ? 'brown' : 'beige')
        }

        if(i <= 15){
            square.firstChild.firstChild.classList.add('black')
        }

        if(i >= 48){
            square.firstChild.firstChild.classList.add('white')
        }

        gameBoard.append(square)
    })
}

createBoard()



const allSquares = document.querySelectorAll("#gameBoard .square")

allSquares.forEach(square =>{
    square.addEventListener('dragStart', dragStart)
    square.addEventListener('dragOver', dragOver)
    square.addEventListener('drop', dragDrop)

})

let startPosId
let draggedElement

function dragStart(e){
    startPosId = e.target.parentNode.getAttribute('squareId')
    draggedElement = e.target
}

function dragOver(e){
    e.preventDefault()
}

function dragDrop(e){
    e.stopPropagation()

    //e.target.parentNode.append(draggedElement)
    e.target.append(draggedElement)
}