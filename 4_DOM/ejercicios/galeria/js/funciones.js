const sectionGaleria = document.querySelector('#galeria');
const sectionDestacados = document.querySelector('#destacados');


function printGallery(pListaImg, pSection) {
    pListaImg.forEach(imagen => printPhoto(imagen, pSection));
}


function printPhoto(pPhoto, pSection) {
    // crear elementos y appendChild. Crear elementos uno.
    const figure = document.createElement('figure') //<figure></figure>
    figure.style.width = pPhoto.width + 'px';
    figure.style.height = pPhoto.height + 'px';
    figure.style.backgroundImage = `url(${pPhoto.url})`;
    figure.style.backgroundSize = 'cover';
    figure.style.backgroundPosition = 'center center'
    const figcaption = document.createElement('figcaption'); //<figcaption></figcaption>

    //opcion1 con createTextNode
    //const contentFigcation = document.createTextNode(pPhoto.title)
    //figcaption.appendChild(contentFigcation)

    //opcion2 con innerText
    figcaption.innerText = pPhoto.title // <figcaption>Minimalismo</figcaption>

    figure.appendChild(figcaption);

    pSection.appendChild(figure)

}

printGallery(imagenes, sectionDestacados);


function markImg(pNumImg, pBorde, pColor, pSection) {
    //capturar la imagen que me han pedido, no lo hago global por que la capturo dependiendo del numero.

    const figureSeleccionado = pSection.querySelector(`figure:nth-child(${pNumImg})`)

    figureSeleccionado.style.border = `${pBorde}px solid ${pColor}`;

}



