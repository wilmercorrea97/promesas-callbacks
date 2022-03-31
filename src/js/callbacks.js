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

export const buscarHeroe = ( id, callback ) => {

    const heroe = heroes[id];
    
    if ( heroe ) {
        callback( null, heroe )
    } else {
        callback(`No existe un héroe con el id ${ id }`);
    }
} 

