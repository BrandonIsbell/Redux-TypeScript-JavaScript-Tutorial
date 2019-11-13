
export function getJoke() {
    return fetch("http://api.icndb.com/jokes/random?limitTo=[nerdy]")
        .then(response=> response.json())
        .catch(error => Promise.reject(error))
};