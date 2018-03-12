
const dafaultState = {
    item: []
};
function todoApp(state = dafaultState, action) {
    switch (action.type) {
        case 'ADD_TODO':
    //返回一个对象
		return Object.assign({}, state, {
            item: [
              ...state.item,
              {
                text: action.text,
              }
            ]
          })
    //返回一个数组
    // return {
    //   item: [
    //     ...state.item,
    //     {
    //       text: action.text,
    //     }
    //   ]
    // }
        default:
        return state
    }
  }


export default todoApp