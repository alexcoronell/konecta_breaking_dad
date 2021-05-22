const url = "https://www.breakingbadapi.com/api/characters";

export default function getCharacters () {

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err));
}
