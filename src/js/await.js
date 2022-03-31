import { CleanPlugin } from "webpack";
import { buscarHeroeAsync } from "./promesas.js";

const heroesId = ['capi', 'iron', 'spider'];

export const obtenerHeroesArr = async() => {
    const heroesArr = [];

    for (const id of heroesId){
        const heroe = await buscarHeroeAsync( id );
        heroesArr.push( heroe );
    }

    return heroesArr;
};


export const obtenerHeroeAwait = async ( id ) => {

    try {

        const heroe = await buscarHeroeAsync (id);
        return heroe;

    } catch {
        console.Console('CATCH!!!');
        return {
            nombre: 'sin nombre',
            poder: 'sin poder'
        }
    }
};

export const heroesCiclo = async () => {
    console.time('HeroesCiclo')

    // Resolucion de la promesa
    // const heroes = await Promise.all( heroesPromesas );
    // heroes.forEach( heroe => console.log(heroe) );

    // Resolucion de la promesa con ciclos
    for await( const heroe of heroesPromesas ) {
        console.log(heroe);
    }

    console.timeEnd('HeroesCiclo')
};

export const heroeIfAwait = async () => {

    if ( (await buscarHeroeAsync(id)).nombre === 'Ironman' ) {
        console.log('Es el mejor heroe del mundo')
    } else {
        console.log('Naa')
    }
};

