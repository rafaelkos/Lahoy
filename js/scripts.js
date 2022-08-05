var riotToken = "RGAPI-323fb144-6cd3-4a21-973d-48a9280498bf"
var lahoyPuuid = "A46wqieoS2TwQVmDczVXS0JF3eAjO5yKI6x--ZfPemtOTkPf0Dgm5-w01IopoCH7Wem2Bj0-cDsgUQ"
var lahoySummonerId = "PqCUkydLgnv1hco2E0MxifjyC3fzcLFDBOF1P1aA3huSvGU6FYPJJPHUMg"
var lahoyAccountId = "9PGOiIrjGayzgAoJKoZtiUJ1VifxAHE8wqPZwMq7GaOc3zhNNkQdfHtN"
var lahoyProfileIconId = "903"
var invocadorPuuid = ""
var invocadorSummonerId = ""
var invocadorAccountId = ""
var invocadorProfileIconId = ""
var invocadorLevel = ""


function teste() {
    let summonerName = document.getElementById("invocador").value
    document.getElementById('teste1').innerHTML = 'Eureka!! a Palavra é: ' + summonerName;
}

function onClickSummoner(){
    let summonerName = document.getElementById("invocador").value
    summonerInformationAPI = "https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key=" + riotToken
    console.log("summonerInformationHTML " + summonerInformationAPI);
    $.getJSON(summonerInformationAPI, function (data) {
        invocadorPuuid = data.puuid
        invocadorSummonerId = data.id
        invocadorAccountId = data.accountId
        invocadorProfileIconId = data.profileIconId
        invocadorLevel = data.summonerLevel
        $('#invocadorTabela > tbody').append(
            '<tr>',
            '<td>' + invocadorProfileIconId + '</td>',
            '<td>' + invocadorLevel + '</td>',
            '<td>' + summonerName + '</td>',
            '<td>' + invocadorPuuid + '</td>',
            '<td>' + invocadorSummonerId + '</td>',
            '<td>' + invocadorAccountId + '</td>',
            '</tr>'
        )
    })
    console.log("invocadorPuuid " + invocadorPuuid)
    console.log("invocadorSummonerId " + invocadorSummonerId)
    console.log("invocadorAccountId " + invocadorAccountId)
    console.log("invocadorProfileIconId " + invocadorProfileIconId)
    console.log("invocadorLevel " + invocadorLevel)
}
