export function deletePiece(pieceId){
    let stringPieces = localStorage.getItem("pieces");
    let pieces = JSON.parse(stringPieces);

    pieces.splice(pieceId, 1);

    stringPieces = JSON.stringify(pieces);

    localStorage.setItem('pieces', stringPieces);

    window.location.href = 'index.html';
}