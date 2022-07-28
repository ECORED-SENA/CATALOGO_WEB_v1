<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Carrusel de tarjetas

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        figure
          img(src="@/assets/curso/temas/carrusel/carrusel.svg", alt="alt")
      .col-lg-6
        .crd.clr-paleYellow.p-4.mb-4
          p.mb-0 El carrusel de tarjetas es un componente web que permite mostrar un grupo de tarjetas de manera secuencial. Las tarjetas están compuestas de iconos y/o imágenes acompañadas de texto.              

        p Cuenta con una imagen general sobre el tema y cada tarjeta incluye un ícono (vector sin texto ni mayor detalle dado su tamaño). La interacción con el usuario se da en el momento que se desee avanzar en el carrusel para conocer la información completa. Es otra manera de seccionar información, pero en estas tarjetas se condensan datos muy concisos y pequeños:
        .row.justify-content-center.align-items-center.ps-3
          .col-lg-6        
            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                p.mb-0 Tips 
              li 
                i.lista-ul__vineta
                p.mb-0 Datos 
              li 
                i.lista-ul__vineta
                p.mb-0 Conceptos clave 
              li 
                i.lista-ul__vineta
                p.mb-0 Principios 
              li 
                i.lista-ul__vineta
                p.mb-0 Fundamentos
          .col-lg-6
            ul.lista-ul--color                       
              li 
                i.lista-ul__vineta
                p.mb-0 Causas 
              li 
                i.lista-ul__vineta
                p.mb-0 Consecuencias /Efectos 
              li 
                i.lista-ul__vineta
                p.mb-0 Ventajas 
              li 
                i.lista-ul__vineta
                p.mb-0 Desventajas 


    separador

    .titulo-segundo.color-acento-contenido
      h2 Estructura del componente
      
    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
        h2.text-center FIRST
        p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
        h2.text-center 2
        p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
        h2.text-center 3
        p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
        h2.text-center 4
        p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
        h2.text-center 5
        p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
        h2.text-center 6
        p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
        h2.text-center 7
        p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
        h2.text-center LAST
        p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
    .row.justify-content-end.mb-5.me-5
      .col-3
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/Carrusel.txt')" target="_blank" type="application/pdf")
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
              li 
                i.fas.fa-angle-right.txt--orange
                | Se deben utilizar máximo 8 tarjetas por carrusel.
              
    .titulo-sexto.color-acento-contenido.mb-3
      h5 Ejemplo
      span carrusel de tarjetas

    .row.justify-content-center
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/carrusel/carrusel_01.png", alt="alt").img400.m-auto
      .col-lg-8
        p Desde el punto de vista del trabajo archivístico, las tablas de retención documental son fundamentales, porque:

        SlyderF.custom.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/carrusel/carrusel_02.svg", alt="alt").img100.m-auto     
            p.text-center.mb-0 Permiten el manejo integral de los documentos.

          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/carrusel/carrusel_03.svg", alt="alt").img100.m-auto        
            p.text-center.mb-0 Facilitan la organización de los documentos a partir del concepto de archivo total.

          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/carrusel/carrusel_04.svg", alt="alt").img100.m-auto       
            p.text-center.mb-0 Ayudan a controlar la producción y trámite documental.

          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/carrusel/carrusel_05.svg", alt="alt").img100.m-auto       
            p.text-center.mb-0 Identifican y reflejan las funciones institucionales.

          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/carrusel/carrusel_06.svg", alt="alt").img100.m-auto       
            p.text-center.mb-0 Integran los procesos archivísticos para el manejo racional de los documentos. 
       
</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
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
