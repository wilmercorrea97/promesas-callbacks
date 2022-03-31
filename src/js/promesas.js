const heroes = {
    capi: {
        nombre: 'Cápitan America',
        poder: 'Super Fuerza'
    },

    iron:{
        nombre: 'Ironman',
        poder: 'Mucho Dinero'
    },

    spider:{
        nombre: 'Spiderman',
        poder: 'Sentido aracnido'
    }    
}


export const buscarHeroe = ( id )  => {

    const heroe = heroes[id];


    return new Promise( ( resolve, reject ) => {
        
        if ( heroe ) {
            resolve( heroe );
        } else {
            reject(`No existe un héroe con el id ${ id }`);
        }
    }  ); 

}


export const buscarHeroeAsync = async( id )  => {

    const heroe = heroes[id];
        
    if ( heroe ) {  
            return heroe;
    } else {
        throw Error(`No existe un héroe con el id ${ id }`);
        }
     

}

const promesaLenta = new Promise( (resolve, reject) =>{
    setTimeout( () => resolve('Promesa Lenta'), 2000 )
} );

const promesaMedia = new Promise( (resolve, reject) =>{
    setTimeout( () => resolve('Promesa Media'), 1500 )
} );

const promesaRapida = new Promise( (resolve, reject) =>{
    setTimeout( () => reject('Promesa Rápida'), 1000 )
} );

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}