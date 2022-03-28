const model = {
    namespace: 'users',
    state: {},
    reducers: {
        getList(){
            return 123;
        }
    },
    effects: {},
    subscriptions: {
        setup({dispatch, history}:{dispatch: any, history: any}){
            return history.listen(({ pathname } : {pathname: string}) => {
                if(pathname == '/users'){
                    dispatch({
                        type: 'getList'
                    })
                }
            })
        }
    },
};
export default model;