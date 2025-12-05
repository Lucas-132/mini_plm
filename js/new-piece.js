document.getElementById('new-piece-form').addEventListener('submit', function(e){
    e.preventDefault()

    const name = document.getElementById('piece-name').value;
    const description = document.getElementById('piece-description').value;

    let stringPieces = localStorage.getItem('pieces');
    let pieces = JSON.parse(stringPieces);

    let date = new Date();
    let dateDayMonthYear = date.getDay();
    dateDayMonthYear += "/"+date.getMonth();
    dateDayMonthYear += "/"+date.getFullYear();

    const piece = {
        "name":name,
        "description":description,
        "version":1,
        "date": dateDayMonthYear
    };

    pieces.push(piece);

    stringPieces = JSON.stringify(pieces);

    localStorage.setItem('pieces',stringPieces);

    window.location.href = 'index.html';
});