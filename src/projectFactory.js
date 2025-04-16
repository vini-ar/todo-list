export function projectFactory(name) {
    let counter = 0;
    counter++
    return {
       id: counter,
       name: name,
       list: []
    }
}