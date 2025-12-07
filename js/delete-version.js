export function deleteVersion(pieceId, version) {
    let stringPieces = localStorage.getItem("pieces");
    let pieces = JSON.parse(stringPieces);

    pieces[pieceId].versions.splice(version, 1);

    stringPieces = JSON.stringify(pieces);

    localStorage.setItem('pieces', stringPieces);

    window.location.href = `piece.html?id=${pieceId}`;
}
