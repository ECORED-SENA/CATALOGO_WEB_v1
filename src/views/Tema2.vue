<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Infografía interactiva

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        figure
          img(src="@/assets/curso/temas/presentaciones/presentaciones.svg", alt="alt")
      .col-lg-6
        .crd.clr-paleYellow.p-4.mb-4
          p.mb-0 Este tipo de infografía se utilizará en el momento que se requiera o desee interacción con el usuario, ya que aquí se demanda una exploración activa en cada componente de la información presentada a partir de ventanas emergentes.

        p.mb-4 Tenemos dos tipos de infografía interactiva:

        ul.lista-ul--color.ps-3
          li
            i.lista-ul__vineta
            | Infografía con puntos calientes
          li
            i.lista-ul__vineta
            | Infografía con ventanas modales



    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Infografía puntos calientes

    ImagenInfografica.color-primario
      template(v-slot:imagen)
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

      .tarjeta.color-acento-botones.p-3(x="20%" y="20%" numero="1")
        .h5.mb-2 titulo
        p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

      .tarjeta.color-acento-botones.p-3(x="50%" y="50%" numero="A")
        .h5.mb-2 titulo
        p Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

      .tarjeta.color-acento-botones.p-3(x="70%" y="70%" numero="B")
        .h5.mb-2 titulo
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/Infografia_puntos_calientes.txt')" target="_blank" type="application/pdf")
          span Ver código fuente

    .row.mb-5
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
            ul.lista-ul.mb-4
              li
                i.fas.fa-angle-right.txt--orange
                | Título corto
              li
                i.fas.fa-angle-right.txt--orange
                | <b>Texto introductorio:</b> &nbsp;colocar una breve descripción del tema que se aborda en la infografía.
              li
                i.fas.fa-angle-right.txt--orange
                | <b>Imagen de referencia:</b> &nbsp;Describir y/o colocar una imagen de referencia, de la infografía solicitada.
              li
                i.fas.fa-angle-right.txt--orange
                | Título y texto que se despliega en cada punto interactivo.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Ejemplo
      span Infografía puntos calientes
    .tarjeta.color-acento-botones--borde.p-5(titulo="Ejemplo - 1")
      .imgCont.m-auto
        .row.justify-content-center.mb-4
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/infografia/infografia_01.svg', alt='', style='')

            .tarjeta.color-acento-botones.p-4(x="11%" y="7%" numero="+" style='border-radius: 10px; background-color: #FFE8C8')
              h5.mb-3.text-center Exposición al evento crítico
              p.mb-0.text-center Produce tensión y puede aparecer un estado de shock que protege a la víctima de una condición abrumadora. De forma inconsciente el cerebro se prepara para dar una respuesta efectiva, sacando los recursos de afrontamiento aprendidos para recuperar el equilibrio.

            .tarjeta.color-acento-botones.p-4(x="29%" y="82%" numero="+" style='border-radius: 10px; background-color: #FFE8C8')
              h5.mb-3.text-center Respuesta desorganizada
              p.mb-0.text-center Hay aumento de la tensión y las respuestas emocionales y cognitivas fallan para enfrentar la crisis de forma adecuada. Las respuestas  se tornan confusas y  provocan  disfunciones.

            .tarjeta.color-acento-botones.p-4(x="47.5%" y="7%" numero="+" style='border-radius: 10px; background-color: #FFE8C8')
              h5.mb-3.text-center Explosión
              p.mb-0.text-center Se pierde el control de las emociones, los pensamientos y los comportamientos tienden a ser contradictorios. Las reacciones pueden pasar de pasivas a agresivas durante semanas.

            .tarjeta.color-acento-botones.p-4(x="66%" y="90%" numero="+" style='border-radius: 10px; background-color: #FFE8C8')
              h5.mb-3.text-center Estabilización
              p.mb-0.text-center Inicia la calma a medida que aparecen los recursos alternos. La persona es muy vulnerable en este momento y puede volver a la fase de explosión. Hay cierto nivel de conciencia de lo que ha sucedido, pero las reacciones ya no son tan extremas.

            .tarjeta.color-acento-botones.p-4(x="84.5%" y="8%" numero="+" style='border-radius: 10px; background-color: #FFE8C8')
              h5.mb-3.text-center Adaptación
              p.mb-0.text-center Comienza el proceso de control sobre las acciones, puede concentrarse en otras situaciones, además del evento vivido, orienta interés por el futuro, se reactiva la socialización y puede descubrir nuevos rumbos a partir de la experiencia vivida.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2  Infografía ventanas modales


    ImagenInfograficaB.color-primario
      template(v-slot:imagen)
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

      div(x="20%" y="20%" tooltip="tooltip de max 35 caracteres" numero="1")
        h5 titulo
        p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
        p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
        p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

      div(x="50%" y="50%" tooltip="tooltip de max 35 caracteres")
        .h5.mb-2 titulo
        p Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

      div(x="70%" y="70%" tooltip="tooltip de max 35 caracteres")
        .h5.mb-2 titulo
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/Infografia_ventanas_modales.txt')" target="_blank" type="application/pdf")
          span Ver código fuente

    .row.mb-5
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
            ul.lista-ul.mb-4
              li
                i.fas.fa-angle-right.txt--orange
                | Título corto
              li
                i.fas.fa-angle-right.txt--orange
                | <b>Texto introductorio:</b> &nbsp;colocar una breve descripción del tema que se aborda en la infografía.
              li
                i.fas.fa-angle-right.txt--orange
                | <b>Imagen de referencia:</b> &nbsp;Describir y/o colocar una imagen de referencia, de la infografía solicitada.
              li
                i.fas.fa-angle-right.txt--orange
                | Título y texto que se despliega en cada punto interactivo.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Ejemplo
      span Infografía ventanas modales
    .tarjeta.color-acento-botones--borde.p-5(titulo="Ejemplo - 1")
      .row.justify-content-center
        .col-lg-11
          ImagenInfograficaB.color-primario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/infografia/infografia_05.png', alt='Texto que describa la imagen')

            div(x="0%" y="5%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  .col-lg-7
                    .h4 Ganado bovino
                    p.mb-3  Es tal vez una de las explotaciones pecuarias más difundida en el mundo y se dedica principalmente a la producción de carne y leche. Se efectúa en sistemas intensivos, semiintensivos y extensivos en múltiples condiciones agroecológicas.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/infografia/mod_01.png', alt='imagen decorativa')

            div(x="0%" y="23%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  .col-lg-7
                    .h4 Porcinos
                    p.mb-3  La producción porcícola se desarrolla en múltiples climas y altitudes, en sistemas que pueden ser extensivos e intensivos.
                    p.mb-3  Estas explotaciones se orientan principalmente a la producción de carne, con destino al consumo directo y a la industria. Igualmente, es común la producción de lechones.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/infografia/mod_02.png', alt='imagen decorativa')

            div(x="0%" y="40%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  .col-lg-7
                    .h4 Avícola
                    p.mb-3  Esta es una de las industrias más grandes que existen en el mundo, pues es una de las proteínas de origen animal más consumidas. En la industria avícola destacan la producción de huevo, pollo de engorde y pollo de levante.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/infografia/mod_03.png', alt='imagen decorativa')

            div(x="0%" y="55%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  .col-lg-7
                    .h4 Búfalos
                    p.mb-3  La producción de carne y leche de búfalo se desarrolla, principalmente, en zonas de trópico bajo, donde se dan condiciones de alta temperatura. Son una fuente importante de proteína.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/infografia/mod_04.png', alt='imagen decorativa')

            div(x="0%" y="70%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  .col-lg-7
                    .h4 Equinos
                    p.mb-3  A este grupo pertenecen, principalmente, caballos, asnos y mulares. Estos animales se utilizan a menudo como apoyo en las labores del campo, en el deporte, las exposiciones, la producción de genética, la recreación y la producción de carne.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/infografia/mod_05.png', alt='imagen decorativa')

            div(x="0%" y="88%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  .col-lg-7
                    .h4 Ovinos
                    p.mb-3  Es uno de los sistemas de ganadería más antiguos y conocidos del mundo. Estos animales, por lo general, se destinan para la obtención de carne, especialmente los camuros, y lana, como en el caso de las ovejas. Estos animales poseen un amplio rango de adaptación climática.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/infografia/mod_06.png', alt='imagen decorativa')

            div(x="100%" y="5%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  .col-lg-7
                    .h4 Caprinos
                    p.mb-3  Junto con los ovinos, los caprinos también pertenecen al grupo de los pequeños rumiantes y son una de las explotaciones pecuarias más populares debido a su gran capacidad adaptativa. En este grupo se destaca la producción de cabras doble propósito.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/infografia/mod_07.png', alt='imagen decorativa')

            div(x="100%" y="23%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  .col-lg-7
                    .h4 Otras aves
                    p.mb-3  Además del pollo de engorde y la gallina ponedora, existen otras aves que igualmente se consideran de importancia económica debido a su participación en el ámbito comercial.
                    p.mb-3  Entre estas se encuentran pavos, patos, codornices, gansos, palomas y aves ornamentales. Estos animales se encuentran en múltiples rangos de altitud y temperatura, lo cual resulta muy favorable desde el punto de vista técnico.

                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/infografia/mod_08.png', alt='imagen decorativa')


            div(x="100%" y="40%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  .col-lg-7
                    .h4 Otras especies menores
                    p.mb-3  Dentro de este grupo de especies menores destacan actividades productivas como la cunicultura y la producción de cuy.
                    p.mb-3  Estos animales se constituyen en fuente importante de alimento a muy bajo costo. Además de la carne, su piel también es aprovechable.

                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/infografia/mod_09.png', alt='imagen decorativa')

            div(x="100%" y="55%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  .col-lg-7
                    .h4 Peces
                    p.mb-3  Este es otro de los grandes grupos de especies animales capaces de constituir proyectos productivos con altos niveles de rentabilidad.
                    p.mb-3  Este tipo de proteínas tienen una alta demanda en diversos espacios, además que estos montajes se adaptan a diversas condiciones agroecológicas.

                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/infografia/mod_10.png', alt='imagen decorativa')

            div(x="100%" y="70%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  .col-lg-7
                    .h4 Especies no convencionales
                    p.mb-3  Recientemente, algunas especies animales han empezado a adquirir relevancia en el escenario productivo debido a su potencial alimenticio.
                    p.mb-3  Dentro de este grupo destacan reptiles como iguanas, babillas y tortugas hicoteas. También existen explotaciones de caracoles, avestruces, llamas y alpacas.

                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/infografia/mod_11.png', alt='imagen decorativa')

            div(x="100%" y="88%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  .col-lg-7
                    .h4 Insectos y anélidos
                    p.mb-3  Existen iniciativas de cría de mariposas con fines ornamentales; explotación apícola para la obtención de miel y polen, larvas de gusano de seda, lombriz roja californiana para la producción de proteína animal o para la transformación de los subproductos de la industria agropecuaria.

                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/infografia/mod_12.png', alt='imagen decorativa')          

</template>

<script>
export default {
  name: 'Tema2',
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
