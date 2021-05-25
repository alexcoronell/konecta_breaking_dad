export default async function getFavoriteQuotes(){
    let data = [];
    data = () => {
        for (let i = 0; i <= window.localStorage.length -1; i++){
            const datakey = localStorage.key(i);
            const currentData = (JSON.parse(localStorage.getItem(datakey)));
            data.push(currentData);
        }
    }
    console.log(data)
    return data
}
