export interface Joke {
    type: string,
    value: JokeValue
}

export interface JokeValue {
    id: number,
    joke: string,
    categories: string[]
}

export interface JokeState {
    successfulRequests: number,
    unSuccessfulRequests: number,
    jokes: Joke[]
}