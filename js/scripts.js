var riotToken = "RGAPI-323fb144-6cd3-4a21-973d-48a9280498bf"
var puuidLahoy = "A46wqieoS2TwQVmDczVXS0JF3eAjO5yKI6x--ZfPemtOTkPf0Dgm5-w01IopoCH7Wem2Bj0-cDsgUQ"
function teste() {
    document.getElementById('teste1').innerHTML = 'Isto é um teste';
}
var url = 'https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=' + riotToken
$.getJSON(url, function (data) {
        console.log(data);
        $('#table1 > tbody').append('<tr><td>' + data.freeChampionIds + '</td></tr>')

});