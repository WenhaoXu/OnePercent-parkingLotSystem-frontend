export default (state={
    visible:false,
    loading:false,
    employeeList:[{
        key: '1',
        name: '张三',
        email: 'xxxx@qq.com',
        phone: 1377777777,
      }, {
        key: '2',
        name: '张三',
        email: 'xxxx@qq.com',
        phone: 1377777777,
      },{
        key: '3',
        name: '张三',
        email: 'xxxx@qq.com',
        phone: 1377777777,
      }]
}, action) => {

    switch (action.type) {
        case 'changeStatus':{

            console.log(123)
            const newState =JSON.parse(JSON.stringify(state));
            newState.visible=action.visible;
            newState.loading=action.loading;
            return newState;
        }
        default:
            return state;
    }
}