export function listPieces(){
    let stringPieces = localStorage.getItem("pieces");
    let pieces = JSON.parse(stringPieces);

    pieces.forEach((piece, index) => {
        var pieceDiv = document.createElement('div');
        pieceDiv.innerHTML = `
            <h2>${piece.name}</h2>
            <a href="piece.html?id=${index}">
            <button>View Piece</button>
            </a>
        `
        
        document.getElementById('pieces-display').appendChild(pieceDiv);
    });
}