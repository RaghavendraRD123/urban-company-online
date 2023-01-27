const initialState = {
    name : 'raghu'
}

export const reducer = (state = initialState ,action) =>{
    const {type , data } = action;
    switch(type){
        default : return state;
    }
}