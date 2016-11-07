// API Docs at:
// https://developer.spotify.com/web-api/search-item/

$(document).ready(() => {

  $("#search").on('submit', (e) => {
    e.preventDefault()
    let type = $("#search-type").val()
    if ( type == "artist") {
      searchByArtist($("#search-keyword").val())
    } else if ( type == "track") {
      searchByTrack($("#search-keyword").val())
    }
  })

  function searchByArtist(keyword) {
    var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',
    }).done((res) => {
      renderResults(res.artists.items)
    }).fail((res) => {
      console.log("Spotify API request failed.")
    })
  }

  function searchByTrack(keyword) {
    var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',
    }).done((res) => {
      renderResults(res.tracks.items)
    }).fail((res) => {
      console.log("Spotify API request failed.")
    })
  }

  function renderResults(data) {
    $("#results").html("")
    $.each(data, (i, item) => {
      $("#results").append(`<li>${item.name}</li>`)
    })
  }

})
