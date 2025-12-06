let params = new URLSearchParams(window.location.search);

let stringPieces = localStorage.getItem("pieces");
let pieces = JSON.parse(stringPieces); // pieces list
let piece = pieces[params.get("id")] // piece that should currently display

// Display the piece's name :
let pieceNameTitle = document.createElement("h1");
pieceNameTitle.innerHTML = `${piece.name}`;
document.getElementById('piece-infos').appendChild(pieceNameTitle);

// Display a button to add a new version :
let addVersionLinkButton = document.createElement('a');
addVersionLinkButton.setAttribute('href',`new-version.html?id=${params.get("id")}`)
addVersionLinkButton.innerHTML = "<button>Add new version</button>";
document.getElementById('piece-infos').appendChild(addVersionLinkButton);

// Display all the piece's versions :
piece.versions.forEach(version => {
    let versionDiv = document.createElement('div');
    versionDiv.innerHTML = `
        <h2>Version: ${version.number}</h2>
        <p>Date of creation: ${version.date}</p>
        <h2>Description:</h2>
        <p>${version.description}</p>
    `;
    document.getElementById('piece-infos').appendChild(versionDiv);
});
