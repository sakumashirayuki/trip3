import { getRemote, editName } from './service';
const model = {
  namespace: 'login',
  state: {},
  reducers: {
    getList(state: any, action: any) {
      return { listData: action.payload };
    },
  },
  effects: {
    *asyncGetData(action: any, effects: any): Generator {
      // @ts-ignore: Unreachable code error
      const { data }: ReturnType<typeof getRemote> = yield effects.call(
        getRemote,
      );
      yield effects.put({ type: 'getList', payload: data });
    },
    *asyncEditName({ payload }, effects: any): Generator {
        yield effects.call(editName, )
    }
  },
  subscriptions: {
    setup({ dispatch, history }: { dispatch: any; history: any }) {
      return history.listen(({ pathname }: { pathname: string }) => {
        if (pathname == '/login') {
          dispatch({
            type: 'asyncGetData',
          });
        }
      });
    },
  },
};
export default model;
