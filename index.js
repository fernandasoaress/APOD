function getApi() {
  let data = $('#data').val()
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=Pd3LXqfvTB5lGt9i80fIKliDJdZarITEPDMRNqZw&date=${data}`,
    success: function (response) {
      let infoHtml = $(
        `<img id="imagemApi" src="${response.url}"><div id="divApi" <h1>${response.title}</h1><p>${response.explanation}</p></div>`
      )
      $('#infoApi').html(infoHtml)
    }
  })
}
