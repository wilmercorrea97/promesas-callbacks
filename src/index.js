import './styles.css';
import { buscarHeroe, buscarHeroeAsync, promesaLenta, promesaMedia, promesaRapida } from './js/promesas';
import { obtenerHeroeAwait, obtenerHeroesArr } from './js/await.js';

// Al mandar un unico argumento que es una funcion, el primer argumento que resuelve la promesa o la funcion
// seria esto pronesaLenta.then(mensaje => console.log(mensaje))

// promesaLenta.then(  console.log );
// promesaMedia.then(  console.log );
// promesaRapida.then( console.log );

// Promise.race  ( [promesaLenta, promesaMedia, promesaRapida] )
//        .then  ( console.log)
//        .catch ( console.warn)


// buscarHeroe('capi').then( heroe => console.log( heroe ) )
//                    .catch(console.error(`No existe un héroe con el id ${ id }`))  

// buscarHeroeAsync('iron').then( heroe => console.log( heroe ) )
//                         .catch(console.error(`No existe un héroe con el id ${ id }`))


obtenerHeroesArr().then( console.table );


// Manejo de Erroes con Await

console.time('await');

obtenerHeroeAwait('capi2')
        .then( heroe => {
            console.log(heroe)

            console.timeEnd('await')
        } ).catch(console.warn)