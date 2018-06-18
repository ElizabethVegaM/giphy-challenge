window.onload = () => {

    const div = document.getElementById('elementos');

    document.getElementById('buscar-gif').addEventListener('click', () => {
      findGif();
    })

    function findGif() {
      const search = document.getElementById('gif-text').value;
      fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=p6YG4QTylE7hM31G0oDMqpVOfL7u8GZw&limit=10`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log('Los gif no pudieron ser descargados :c');
            throw new Error('Mala respuesta de GIPHY');
          }
        }).then((gifJSON) => { // este then es de la promesa de response.json()    
          console.log(gifJSON);
          gifJSON[0].forEach(() => {
            console.log('hola que hace');

            const gifReceptorDiv = document.getElementById('elementos');
            const giphy = gifJson.data[i].images.fixed_width.url;
            console.log(giphy);
          })
        }).catch((error) => {
            console.error('Holi soy un error ' + error);
          })
        }
      }