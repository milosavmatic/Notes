import lscache from 'lscache';

export const objectFromStorage = key => {
    const storedObject = lscache.get(key);
    console.log(storedObject)
    return storedObject;
    
};

export const objectToStorage = (key, object) => {
    if (typeof object === 'object') {
        lscache.set(key, object, 15);
    }
};
