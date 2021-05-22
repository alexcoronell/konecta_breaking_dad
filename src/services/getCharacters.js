const limit = 5;

export default function getCharacters (page) {
    const offset = (page * limit);
    const url = `https://www.breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}`;

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err));
}
