// const date = new Date(2022,4,8);
// const today = new Date();
// const tasks = [
//     {
//         title: 
//             date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && 
//             date.getFullYear() === today.getFullYear() ? 'Hoy' 
//             : 
//             date.getDate() === today.getDate() + 1  && 
//             date.getMonth() === today.getMonth() && 
//             date.getFullYear() === today.getFullYear() ? 'Mañana' 
//             : 
//             date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear(),
//         data:[
//             {
//                 id:1,
//                 text:'Valorar esta molona aplicación',
//                 hour: today.getMinutes() < 10 ? today.getHours() < 10 ? '0' + today.getHours() + ':0' + today.getMinutes() : today.getHours() + ':0' + today.getMinutes() : today.getHours() + ':' + today.getMinutes(),
//                 date: date.toDateString(),
//                 isFinished: false,
//             },
//         ]
//     },
// ]

const today = new Date();
const date = new Date();

const tasks = [
    {
        id: 1,
        text: '¡Valorar esta molona aplicación!',
        hour: today.getMinutes() < 10 ? today.getHours() < 10 ? '0' + today.getHours() + ':0' + today.getMinutes() : today.getHours() + ':0' + today.getMinutes() : today.getHours() + ':' + today.getMinutes(),
        date: date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear() ? 'Hoy' : date.getDate() === today.getDate() + 1  && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear() ? 'Mañana' : date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear(),
        isFinished: false,
    },
    {
        id: 2,
        text: 'Sacar a pasear al perro',
        hour: today.getMinutes() < 10 ? today.getHours() < 10 ? '0' + today.getHours() + ':0' + today.getMinutes() : today.getHours() + ':0' + today.getMinutes() : today.getHours() + ':' + today.getMinutes(),
        date: 'Mañana',
        isFinished: true,
    },
    // {
    //     id: 3,
    //     text: 'Buscar un nuevo sofá',
    //     hour: date.getMinutes() < 10 ? date.getHours() + ':0' + date.getMinutes() : date.getHours() + ':' + date.getMinutes(),
    //     // hour: '12:15',
    //     date: date.toDateString(),
    //     isFinished: false,
    // },
    // {
    //     id: 4,
    //     text: 'Hacer la compra',
    //     hour: date.getMinutes() < 10 ? date.getHours() + ':0' + date.getMinutes() : date.getHours() + ':' + date.getMinutes(),
    //     // hour: '12:15',
    //     date: date.toDateString(),
    //     isFinished: false,
    // }
];

module.exports = { tasks }