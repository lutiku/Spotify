



/*_______________________________________*/
function getApiData() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText)
            console.log(data)

            const artist = data.items[0].artists[0].name


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

            /*Boucle qui récupère Les images de taille moyenne + titre des chansons qui corespond à chaque image*/

            const nbitems_moyen = data.items.length

            for(let i=0; i< nbitems_moyen ; i++)
            {
                const nbimages_moyen = data.items[i].images[1].url
                console.log(nbimages_moyen)


                const single_name = data.items[i].name
                console.log(single_name)


                document.querySelector('.img'+[i]).innerHTML = '<img src='+nbimages_moyen+'  alt="image_single">'




            } /*fin boucle*/

            /*Boucle for qui récupère le titre des chansons*/
            const nbitems_name = data.items.length

            for(let n=0; n< nbitems_name ; n++) {
                const nbsingles = data.items[n]


                const single_name = data.items[n].name


                console.log(single_name)
                document.querySelector('.title'+[n]).innerHTML = single_name


            }/*Fin boucle*/



        }

    }




    xhr.open('GET', 'https://api.spotify.com/v1/artists/1CoZyIx7UvdxT5c8UkMzHd/albums?include_groups=single&scopes=&market=FR&limit=17')


    xhr.send()
}



getApiData()




/*Récupérer le titre des tracks  */


function getTracksData() {
    const xhrTracksData = new XMLHttpRequest()
    xhrTracksData.onreadystatechange = function () {
        if (xhrTracksData.readyState === 4) {
            const data = JSON.parse(xhrTracksData.responseText)
            console.log(data)



            for(i=0 ; i<5 ; i++) {

                const tracks = data.tracks[i].name
                console.log(tracks)

                document.querySelector('.tracks'+[i]).innerHTML = tracks


            }

        }
    }


    xhrTracksData.open('GET', 'https://api.spotify.com/v1/artists/1CoZyIx7UvdxT5c8UkMzHd/top-tracks?country=FR')


    xhrTracksData.send()

}

getTracksData()





/* ______________Artist_data*____________________________________*/
/*
function getTracksData() {
    const xhrTracksData = new XMLHttpRequest()
    xhrTracksData.onreadystatechange = function () {
        if (xhrTracksData.readyState === 4) {
            const data = JSON.parse(xhrTracksData.responseText)
            console.log(data)

            const img = data.images[1].url
            console.log(img)




            for(i=0 ; i<5 ; i++) {

                const tracks = data.tracks[i].name
                console.log(tracks)

                document.querySelector('.tracks'+[i]).innerHTML = tracks


            }

        }
    }


    xhrTracksData.open('GET', 'https://api.spotify.com/v1/artists/1CoZyIx7UvdxT5c8UkMzHd')


    xhrTracksData.send()

}

getTracksData()



*/


/*_______________________________________CAROUSSEL_________________________*/
/*

function moveToSelected(element)
{
    if (element == "next") {
        var selected = $(".selected").next();
    }
    else if (element == "prev")
    {
        var selected = $(".selected").prev();
    }
    else
    {
        var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function(e)
{
    switch(e.which)
    {
        case 37: // left
            moveToSelected('prev');
            break;

        case 39: // right
            moveToSelected('next');
            break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
    moveToSelected($(this));
});

$('#prev').click(function() {
    moveToSelected('prev');
});

$('#next').click(function() {
    moveToSelected('next');
});

*/
/*____________________________________SEARCH___________________*/


/*

function getSearchData() {
    const xhrSearchData = new XMLHttpRequest()
    xhrSearchData.onreadystatechange = function () {
        if (xhrSearchData.readyState === 4) {
            const data = JSON.parse(xhrSearchData.responseText)
            console.log(data)









        }
    }

    function search() {
        const artist = document.getElementById("artist").value;
        console.log(artist);
    }

    xhrSearchData.open('GET', 'https://api.spotify.com/v1/search?q='+artist+'&type=artist')


    xhrSearchData.send()

}

getSearchData()*/























