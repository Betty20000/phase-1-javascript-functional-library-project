// Collection Functions
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        const values = Object.values(collection);
        const keys = Object.keys(collection);
        for (let i = 0; i < values.length; i++) {
            callback(values[i], keys[i], collection);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection));
        }
    } else {
        const values = Object.values(collection);
        const keys = Object.keys(collection);
        for (let i = 0; i < values.length; i++) {
            result.push(callback(values[i], keys[i], collection));
        }
    }
    return result;
}

// function myReduce(collection, callback, acc) {
//     let startIndex = 0;
//     if (acc === undefined) {
//         acc = collection[0];
//         startIndex = 1;
//     }
//     if (Array.isArray(collection)) {
//         for (let i = startIndex; i < collection.length; i++) {
//             acc = callback(acc, collection[i], collection);
//         }
//     } else {
//         const values = Object.values(collection);
//         const keys = Object.keys(collection);
//         for (let i = startIndex; i < values.length; i++) {
//             acc = callback(acc, values[i], keys[i], collection);
//         }
//     }
//     return acc;
// }
function myReduce(collection, callback, acc) {
    let startIndex = 0;
    if (acc === undefined) {
        if (Array.isArray(collection)) {
            acc = collection[0];
            startIndex = 1;
        } else {
            const keys = Object.keys(collection);
            acc = collection[keys[0]];
            startIndex = 1;
        }
    }
    if (Array.isArray(collection)) {
        for (let i = startIndex; i < collection.length; i++) {
            acc = callback(acc, collection[i], i, collection);
        }
    } else {
        const keys = Object.keys(collection);
        for (let i = startIndex; i < keys.length; i++) {
            acc = callback(acc, collection[keys[i]], keys[i], collection);
        }
    }
    return acc;
}


function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                return collection[i];
            }
        }
    } else {
        const values = Object.values(collection);
        const keys = Object.keys(collection);
        for (let i = 0; i < values.length; i++) {
            if (predicate(values[i], keys[i], collection)) {
                return values[i];
            }
        }
    }
}

function myFilter(collection, predicate) {
    const result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                result.push(collection[i]);
            }
        }
    } else {
        const values = Object.values(collection);
        const keys = Object.keys(collection);
        for (let i = 0; i < values.length; i++) {
            if (predicate(values[i], keys[i], collection)) {
                result.push(values[i]);
            }
        }
    }
    return result;
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}
// Collection Functions
// (existing functions...)

function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}
