<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Slider de imágenes

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        figure
          img(src="@/assets/curso/temas/sliders/Slider.svg", alt="alt")
      .col-lg-6
        .crd.clr-paleYellow.p-4.mb-4
          p.mb-0 El Slider de imágenes es un componente web que permite mostrar de manera secuencial múltiples imágenes y textos. En algunos casos se puede hacer uso de componentes interactivos sencillos dentro de cada una de las diapositivas.  

        p Es una secuencia de diapositivas cuyo texto es corto y se refiere únicamente a la definición, explicación o especificación de la imagen que se está mostrando. Se le dará un uso óptimo al momento de explicar gráficos estadísticos, descripción de procesos físicos, químicos o biológicos; tipos de circuitos, conexiones etc. Todo aquello donde el protagonismo lo lleve la imagen.                  

    separador    

    .titulo-segundo.color-acento-contenido
      h2 Estructura del componente
      
    .bg--gradientBlue.p-5
      SlyderB(:datos="datosSlyder")
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/Slide_imagenes.txt')" target="_blank" type="application/pdf")
          span Ver código fuente

    .row.mb-5
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-botones       
          .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
            ul.lista-ul.mb-4
              li 
                i.fas.fa-angle-right.txt--orange
                | Titulo corto e ilustrativo (cuando aplica).
              li 
                i.fas.fa-angle-right.txt--orange
                | Cada diapositiva debe ir acompañada de un texto corto que acompañe a una  foto o ilustración. 

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Ejemplo
      span slider de imágenes 

    .bg--gradientBlue.p-5.mb-4
      SlyderB(:datos="datosSlyderEjemplo") 

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    datosSlyder: [
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],

    datosSlyderEjemplo: [
      {
        titulo: 'Histograma',
        texto:
          'Agrupación de datos.<br>Sirve para datos cualitativos y cuantitativos.<br>Las barras siempre van unidas.<br>Los histogramas ayudan a ver el centro, la extensión y la forma de un conjunto de datos.',
        imagen: require('@/assets/curso/temas/slider_imagenes/slide_A_01.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Polígono de frecuencia',
        texto:
          'Gráfico que se crea a partir de un histograma de frecuencia. Estos histogramas emplean columnas verticales para reflejar frecuencias: el polígono de frecuencia es realizado uniendo los puntos de mayor altura de estas columnas.',
        imagen: require('@/assets/curso/temas/slider_imagenes/slide_A_02.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Diagrama de barras',
        texto:
          'Un diagrama de barras es una representación en dos dimensiones de la frecuencia, ya sea absoluta o relativa, de una variable cuantitativa o cualitativa, pero siempre discreta y distribuida en filas.',
        imagen: require('@/assets/curso/temas/slider_imagenes/slide_A_03.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Circular',
        texto:
          'Se utiliza para representar la proporción de elementos de cada uno de los valores de la variable.',
        imagen: require('@/assets/curso/temas/slider_imagenes/slide_A_04.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Tallos y hojas',
        texto:
          'Es un semigráfico que permite presentar la distribución de una variable cuantitativa. Consiste en separar cada dato en el último dígito (que se denomina <strong>hoja</strong>) y las cifras delanteras restantes (que forman el <strong>tallo</strong>).',
        imagen: require('@/assets/curso/temas/slider_imagenes/slide_A_05.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Diagrama de caja',
        texto:
          'Un diagrama de cajas y bigotes es una manera conveniente de mostrar visualmente grupos de datos numéricos a través de sus cuartiles.',
        imagen: require('@/assets/curso/temas/slider_imagenes/slide_A_06.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Diagrama de dispersión',
        texto:
          'Los diagramas de dispersión usan una colección de puntos colocados usando coordenadas cartesianas para mostrar valores de dos variables.',
        imagen: require('@/assets/curso/temas/slider_imagenes/slide_A_07.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Pictograma',
        texto:
          'Los pictogramas son tipos de tablas y gráficos que utilizan íconos e imágenes para representar datos.',
        imagen: require('@/assets/curso/temas/slider_imagenes/slide_A_08.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
