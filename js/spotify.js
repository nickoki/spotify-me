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
      renderArtists(res)
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
      renderTracks(res)
    }).fail((res) => {
      console.log("Spotify API request failed.")
    })
  }

  function renderArtists(res) {
    $("#results").html("")
    $.each(res.artists.items, (i, artist) => {
      $("#results").append(`<li>${artist.name}</li>`)
    })
  }

  function renderTracks(res) {
    $("#results").html("")
    $.each(res.tracks.items, (i, track) => {
      $("#results").append(`<li>${track.name}</li>`)
    })
  }

})
