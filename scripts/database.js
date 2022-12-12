/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            id: 1,
            name: "Bart",
            species: "whale shark",
            food: "crustaceans",
            size: 20
        },
        {
            id: 2,
            name: "John",
            species: "blue ringed octopus",
            food: "fish",
            size: 5
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

