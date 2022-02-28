### quiero montar una galeria de imagenes dinamica que venga de un array datos externo
    - vamos crear un datos.js que contenga un array con 5 imagenes.
        - ruta relativa a la imagen
        - titulo de la imagen
        - la altura de la imagen
        - y la anchura del imagen.

## crearemos una carpeta con imagenes del mismo tamaño, 5 imagenes.
    - el ejercicio debe pintar la imagen de la carpeta correspondiente en el tamaño estipulado en mi array.
    - Ojo la imagen me la teneis que pintar sin deformar
    -crear un metodo para pintar todas las imagenes
    - crear un metodo que permita marcar cualquier imagen de la galeria con borde rojo de 3px

    const imagenes = new Array(
        {
            url: './images/g-minimalismo.jpg',
            title: 'Carlos saltando'
            width: 200,
            height: 100
        }
    )