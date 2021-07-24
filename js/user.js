export function getRandom() {
    const main = document.querySelector('.userImg')
    const randomImageApiUrl = "https://randomuser.me/api/";

    fetch(randomImageApiUrl)

        .then(function (response) {

            return response.json();

        })
        .then(function (json) {

            let user = json.results[0].name.first;
            let image = json.results[0].picture.large;

            const movieEl = document.createElement('div')
            movieEl.classList.add('movie')

            movieEl.innerHTML = `
             <img src=" ${image}"> Hii ${user}`
            main.appendChild(movieEl)

        })
        .catch(function (error) {
            console.error(error)
        });
}