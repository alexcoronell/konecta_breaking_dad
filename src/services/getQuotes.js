export default function getQuotes({author}) {
    const url = `https://www.breakingbadapi.com/api/quote?author=${author}`;
    const result = fetch(url)
                    .then(res => res.json())
    return result;
}