// export default (state = [], action) => {
//     const {type,payload} = action;
//     switch (type) {
//         case 'GET_RESUMES':
//             state = payload;
//             break;

//         case 'DELETE_RESUMES':
//             state = state.filter(item=> item.id!=payload);
//             break;
    
//         default:
//             break;
//     }
//     return state;
// }