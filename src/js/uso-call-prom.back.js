import { buscarHeroe as buscarHeroeCallBack } from './js/callbacks'
import { buscarHeroe } from './js/promesas'

import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron';
const heroeId3 = 'spider';


// buscarHeroe( heroeId, ( error, heroe ) => {
//     if (error) {
//         console.error( error );
//     } else {
//         console.log(heroe);
//     }
// } );

//          --------------DEFINICIÓN DE PROMISE HALL  ----------------------------
// buscarHeroe( heroeId1).then( heroe1 => {
//     console.log(`Enviando a ${heroe1.nombre} a la misión.`);

//     buscarHeroe(heroeId2).then( heroe2  => {
//         console.log(`enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
//     })
// });

//          --------------RESOLUCIÓN DE PROMISE HALL  ----------------------------
Promise.all([ buscarHeroe(heroeId1),buscarHeroe(heroeId3) ])
    .then( ([heroe1, heroe2]) => {

    console.log(`Enviando a ${ heroe1.nombre } y ${ heroe2.nombre } a la misión`);

}).catch( err => {
    alert(err)

}).finally ( () => {
    console.log('Se termino el promise.all');
});



console.log('fin de programa');