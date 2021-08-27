export default{
    namespace: 'products',
    state: 0,
    reducers: {
        'add'(state: number){
            return state + 1;
        }
    }
}