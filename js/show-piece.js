let stringPieces = localStorage.getItem("pieces");
let pieces = JSON.parse(stringPieces); // pieces list
let piece = pieces[params.get("id")] // piece that should currently display

// Display the piece's name :
var pieceNameTitle = document.createElement("h1");
pieceNameTitle.innerHTML = `${piece.name}`;
document.getElementById('piece-infos').appendChild(pieceNameTitle);

// Display all the piece's versions :
piece.slice(1).forEach(version => {
    var versionDiv = document.createElement('div');
    versionDiv.innerHTML = `
        <h2>Version: ${version.number}</h2>
        <p>Date of creation: ${version.date}</p>
        <h2>Description:</h2>
        <p>${version.description}</p>
    `
    document.getElementById('piece-infos').appendChild(verionDiv);
});

