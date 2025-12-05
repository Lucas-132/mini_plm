export function listPieces(){
    let stringPieces = localStorage.getItem("pieces");
    let pieces = JSON.parse(stringPieces);

    pieces.forEach((piece) => {
        var pieceDiv = document.createElement('div');
        pieceDiv.innerHTML = `<h2>${piece.name}</h2>`
        document.getElementById('pieces-display').appendChild(pieceDiv);
    });
}