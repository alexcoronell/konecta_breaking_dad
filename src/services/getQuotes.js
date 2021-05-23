export default function getQuotes({author}) {
    const url = `https://www.breakingbadapi.com/api/quote?author=${author}`;
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err));
}