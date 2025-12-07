import { deleteVersion } from './delete-version.js';

let params = new URLSearchParams(window.location.search);

let stringPieces = localStorage.getItem("pieces");
let pieces = JSON.parse(stringPieces); // pieces list
let piece = pieces[params.get("id")] // piece that should currently display

// Display the piece's name :
document.getElementById('piece-name').innerHTML = `${piece.name}`

// Display a button to add a new version :
let addVersionLinkButton = document.createElement('a');
addVersionLinkButton.setAttribute('href', `new-version.html?id=${params.get("id")}`)
addVersionLinkButton.innerHTML = "<button>Add new version</button>";
document.getElementById('piece-infos').appendChild(addVersionLinkButton);

// Display all the piece's versions :
piece.versions.forEach((version, index) => {
    let versionDiv = document.createElement('div');
    versionDiv.innerHTML = `
        <h2>Version: ${version.number}</h2>
        <p>Date of creation: ${version.date}</p>
        <h2>Description:</h2>
        <p>${version.description}</p>
        <button class="delete-btn" data-index="${index}">Delete Version</button>
        <hr>
    `;

    document.getElementById('piece-infos').appendChild(versionDiv);

    versionDiv.querySelector('.delete-btn').addEventListener('click', () => {
        deleteVersion(params.get("id"), index);
    });
});
