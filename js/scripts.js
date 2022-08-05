var riotToken = "RGAPI-323fb144-6cd3-4a21-973d-48a9280498bf"
var lahoyPuuid = "A46wqieoS2TwQVmDczVXS0JF3eAjO5yKI6x--ZfPemtOTkPf0Dgm5-w01IopoCH7Wem2Bj0-cDsgUQ"
var lahoySummonerId = "PqCUkydLgnv1hco2E0MxifjyC3fzcLFDBOF1P1aA3huSvGU6FYPJJPHUMg"
var lahoyAccountId = "9PGOiIrjGayzgAoJKoZtiUJ1VifxAHE8wqPZwMq7GaOc3zhNNkQdfHtN"
var lahoyProfileIconId = "903"
function teste() {
    document.getElementById('teste1').innerHTML = 'Isto é um teste';
}
var url = 'https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=' + riotToken
$.getJSON(url, function (data) {
        console.log(data);
        $('#table1 > tbody').append('<tr><td>' + data.freeChampionIds + '</td></tr>')

});