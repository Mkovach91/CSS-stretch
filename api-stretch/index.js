const art = async () => {
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-FTB-ET-WEB-FT/artists`)
  const resultsJson = await response.json()
  const artists = resultsJson.data
  const artistLis = artists.map((artist) => {
    return `<li>${artist.name}</li>`
  })

  console.log(response)

  const ol = document.querySelector(`ul`);
  ol.innerHTML = artistLis.join(``)
}

art();
