document.getElementById('new-version-form').addEventListener('submit', function(e){
    e.preventDefault();

    let params = new URLSearchParams(window.location.search);

    const description = document.getElementById('version-description').value;

    let stringPieces = localStorage.getItem('pieces');
    let pieces = JSON.parse(stringPieces);

    let date = new Date();
    let dateDayMonthYear = date.getDay();
    dateDayMonthYear += "/"+date.getMonth();
    dateDayMonthYear += "/"+date.getFullYear();

    // Initializing new version
    const newVersion = {
        "number":pieces[params.get("id")].versions.length + 1,
        "description":description,
        "date": dateDayMonthYear
    };

    pieces[params.get("id")].versions.push(newVersion); // Adding new version to the corresponding piece's versions list

    stringPieces = JSON.stringify(pieces);
    localStorage.setItem('pieces', stringPieces);

    window.location.href = `piece.html?id=${params.get("id")}`;
});