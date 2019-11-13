import { Joke } from "../store/myTypes";

export function getJoke(): Promise<Joke> {
    return new Promise((resolve,reject)=>{
        fetch("http://api.icndb.com/jokes/random?limitTo=[nerdy]")
        .then(response=> response.json())
        .catch(error => reject(error))
        .then(body => resolve(body))
    });
};