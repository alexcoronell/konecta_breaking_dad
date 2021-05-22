const limit = 5;
export default function getCharacters (page= 0) {
    const offset = (page * limit);
    const url = `https://www.breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}`;

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err));
}

export function getCharactersAll() {
    const url = `https://www.breakingbadapi.com/api/characters`;
    return fetch(url)
        .then(res => res.json())
        .then(res => {
            res = parseInt(res.length / 5);
            return res;
        })
        .catch(err => console.log(err));
} 
