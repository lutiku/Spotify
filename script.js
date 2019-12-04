function getApiData() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText)
            console.log(data)

            const artist = data.items[0].artists[1].name


            const artistSecond = data.items[0].artists[0].name


            const artists = artist+' feat '+artistSecond
            console.log(artists)



            const date= data.items[0].release_date
            console.log(date)


            /*Boucle for qui récupère toutes les images*/
/*
            const nbitems = data.items.length

            for(let i=0; i< nbitems ; i++)
            {
                const nbimages = data.items[i]


                const itemsimage= data.items[i].images.length

                for(let j= 0 ; j< itemsimage ; j++)
                {
                    const resultimages = data.items[i].images[j].url
                    console.log(resultimages)
                }
            }
*/

            /*Boucle qui récupère Les images de taille moyenne + insertion image caroussel*/

            const nbitems_moyen = data.items.length

            for(let i=0; i< nbitems_moyen ; i++)
            {
                const nbimages_moyen = data.items[i].images[1].url
                console.log(nbimages_moyen)


                document.querySelector('.img'+[i]).innerHTML = '<img src='+nbimages_moyen+'  alt="image_single">'





            } /*fin boucle*/

            /*Boucle for qui récupère le titre des chansons*/
            const nbitems_name = data.items.length

            for(let n=0; n< nbitems_name ; n++) {
                const nbsingles = data.items[n]


                const single_name = data.items[n].name


                console.log(single_name)

                /*document.querySelector('.img'+[n]+' p').innerHTML = single_name*/





            }/*Fin boucle*/



        }

    }




    xhr.open('GET', 'https://api.spotify.com/v1/artists/1CoZyIx7UvdxT5c8UkMzHd/albums?include_groups=single&market=ES&limit=10&offset=5')


    xhr.send()
}



getApiData()




/*Récupérer la musique*/


function getTracksData() {
    const xhrTracksData = new XMLHttpRequest()
    xhrTracksData.onreadystatechange = function () {
        if (xhrTracksData.readyState === 4) {
            const data = JSON.parse(xhrTracksData.responseText)
            console.log(data)

            const preview = data.preview_url
            console.log(preview)



        }

    }


    xhrTracksData.open('GET', 'https://api.spotify.com/v1/tracks/5TTZ0fMZVLLseFk7NC6NRz?market=FR')


    xhrTracksData.send()

}

getTracksData()





/* User_data*/

/*
function getUserData() {
    const xhrUserData = new XMLHttpRequest()
    xhrUserData.onreadystatechange = function () {
        if (xhrUserData.readyState === 4) {
            const data = JSON.parse(xhrUserData.responseText)
            console.log(data)

            const preview = data.preview_url
            console.log(preview)



        }

    }


    xhrUserData.open('GET', '')


    xhrUserData.send()

}

getUserData()*/









