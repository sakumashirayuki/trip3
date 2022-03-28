const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
];

const model = {
  namespace: 'users',
  state: {},
  reducers: {
    getList(state: any, action: any) {
      return { listData: action.payload };
    },
  },
  effects: {
    *asyncGetData(action: any, effects: any): Generator {
      const listData = yield Promise.resolve(data);
      yield effects.put({ type: 'getList', payload: listData });
    },
  },
  subscriptions: {
    setup({ dispatch, history }: { dispatch: any; history: any }) {
      return history.listen(({ pathname }: { pathname: string }) => {
        if (pathname == '/users') {
          dispatch({
            type: 'asyncGetData',
          });
        }
      });
    },
  },
};
export default model;
