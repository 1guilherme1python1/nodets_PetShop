type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuOptions = (active:MenuOptions)=>{
    let returnObject = {
        all:false, 
        dog:false,
        cat:false,
        fish:false
    };
    if(active !== ''){
        returnObject[active] = true;
    }

    return returnObject;
}