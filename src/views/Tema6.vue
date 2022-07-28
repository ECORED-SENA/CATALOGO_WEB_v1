<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Slider de diapositivas

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        figure
          img(src="@/assets/curso/temas/sliders/Diapositivas.svg", alt="alt")
      .col-lg-6
        .crd.clr-paleYellow.p-4.mb-4
          p.mb-0 El Slider de diapositivas es un componente web que permite representar de manera secuencial múltiples escenas o diapositivas, las cuales están compuestas de imágenes y texto. En algunos casos se puede hacer uso de componentes interactivos sencillos dentro de cada una de las diapositivas.

        p.mb-4 Son interactivas con el usuario dado que se requiere que éste deslice la información manualmente permitiendo así que pueda tomarse su tiempo para leer, comprender y regresar a una información anterior en el momento que lo crea conveniente.

        p.mb-4 Su uso está determinado por la extensión del tema o cuando hay:

        ul.lista-ul--color.ps-3
          li 
            i.lista-ul__vineta
            p.mb-0 Tópicos y subtópicos
          li 
            i.lista-ul__vineta
            p.mb-0 Secuencia, sucesos o casos
          li 
            i.lista-ul__vineta
            p.mb-0 Secciones
          li 
            i.lista-ul__vineta
            p.mb-0 Procedimientos
          li 
            i.lista-ul__vineta
            p.mb-0 Narraciones o historias


    separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Slide navegación simple

    p.mb-4 Provee mayor espacio para la explicación textual así que es óptima para la definición de conceptos completos y extensos. No se asocia a pasos específicos o tipificaciones sino que puede abarcar una temática completa dividida en secciones.

    .tarjeta.tarjeta--azul.p-4
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen

          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/Slide_navegacion_simple.txt')" target="_blank" type="application/pdf")
          span Ver código fuente

    .row.mb-5
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
            ul.lista-ul.mb-0
              li
                i.fas.fa-angle-right.txt--orange
                | Título o subtítulo de la temática que se aborda
              li
                i.fas.fa-angle-right.txt--orange
                | Colocar una breve descripción del tema que se aborda en el slide
              li
                i.fas.fa-angle-right.txt--orange
                | Colocar el texto que va en cada diapositiva según el formato instruccional

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Ejemplo
      span navegación simple

    .slyderB_bg_01.px-5.py-3.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="01")
              h4.ps-4 <i>Determine cuáles LEADS están listos para hacerles seguimiento:</i>
              p.ps-4.mb-0 Debe hacer un análisis de los datos que obtenga de los LEADS, sobre el interés que han mostrado por los productos y servicios ofertados, cuál es el tipo de empresa y que necesidades presenta. Con estos datos puede determinar el cliente puede convertirse en un cliente fiel y determinar el trato que debe tener, es decir realizar una clasificación del cliente exponencial a futuro y con esto, deberá disponer de la persona de ventas adecuada que logre efectivamente cerrar la venta con LEAD. Esta clasificación de LEADS, le permite, contactar en el momento adecuado, escoger su personal acertado, convencer a su nuevo cliente más fácilmente y conseguir clientes fieles de manera óptima.
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/sliders/sliderB_01.svg')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="02")
              h4.ps-4 <i>El tiempo lo es todo, ¿cuándo se debe hacer un seguimiento?</i>
              p.ps-4.mb-0 El mejor momento para realizar un primer contacto con un LEAD, es inmediatamente cuando el LEAD muestra interés en los productos y servicios. Los LEADS que estén interesados en los productos y que van a comprar, les atraerá, la atención inmediata que le suministre el personal de ventas y si no lo hace una empresa, la competencia estará lista para quedarse con los LEADS. Cuando un equipo de ventas, atiende a los LEADS, podrá aprovechar para obtener de ellos datos específicos de sus intereses vs productos.
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/sliders/sliderB_02.svg')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="03")
              h4.ps-4 <i>Conocer dónde están, ¿cómo hacer un seguimiento?</i>
              p.ps-4.mb-0 Inicialmente, determine qué tipo de comunicación prefieren los LEADS, ya sea presencialmente, por teléfono, por chats, por correo o mensajes de texto y es la primera buena impresión que van a tener de la empresa y que no se van a incomodar. Seguido a esto, el contenido de la primera entrevista con un LEAD, debe ser muy atrayente e impactante, que el contenido haga que el LEAD se interese más por los productos y llegue a un cierre exitoso de venta.
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/sliders/sliderB_03.svg')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="04")
              p.ps-4.mb-0 Con las herramientas que proporciona la tecnología, el equipo de ventas, debe estar muy de la mano con el equipo de marketing para lograr una consecución efectiva y grande de LEADS, mediante las redes sociales y la publicidad en general.
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/sliders/sliderB_04.svg')

    separador
    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Slide navegación con numerales.

    p.mb-4 Ideal para textos cortos, bien sea para un procedimiento, una historia, definiciones pequeñas o características puntuales. También podría usarse para plantear ejemplos cuando una situación o temática tiene diferentes variables.

    p.mb-4 La composición gráfica puede tomar el protagónico siendo muy explicativa. Los pasos irán numerados, no nombrados.

    p.mb-4 Se recomienda usar máximo 10 pasos y mínimo 4.

    .tarjeta.tarjeta--gris.p-4
      PasosB.color-acento-contenido
        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen

        .row(titulo="")
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/Slide_navegacion_con_numerales.txt')" target="_blank" type="application/pdf")
          span Ver código fuente

    .row.mb-5
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
            ul.lista-ul.mb-0
              li
                i.fas.fa-angle-right.txt--orange
                | Título o subtítulo de la temática que se aborda
              li
                i.fas.fa-angle-right.txt--orange
                | Colocar una breve descripción del tema que se aborda en el slide
              li
                i.fas.fa-angle-right.txt--orange
                | Colocar el texto que va en cada diapositiva según el formato instruccional

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Ejemplo
      span navegación con numerales
    .p-4.mb-5.pb-0(style='background-color: #F2E6DD; border-top-left-radius: 20px; border-top-right-radius: 20px;')
      PasosB.color-acento-botones
        .row(titulo="")
          .col-md-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/sliders/pasos_01.svg', alt='Texto que describa la imagen')

        .row(titulo="")
          .col-md-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/sliders/pasos_02.svg', alt='Texto que describa la imagen')

        .row(titulo="")
          .col-md-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/sliders/pasos_03.svg', alt='Texto que describa la imagen')

        .row(titulo="")
          .col-md-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/sliders/pasos_04.svg', alt='Texto que describa la imagen')

        .row(titulo="")
          .col-md-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/sliders/pasos_05.svg', alt='Texto que describa la imagen')

        .row(titulo="")
          .col-md-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/sliders/pasos_06.svg', alt='Texto que describa la imagen')

        .row(titulo="")
          .col-md-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/sliders/pasos_07.svg', alt='Texto que describa la imagen')

        .row(titulo="")
          .col-md-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/sliders/pasos_08.svg', alt='Texto que describa la imagen')

        .row(titulo="")
          .col-md-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/sliders/pasos_09.svg', alt='Texto que describa la imagen')

        .row(titulo="")
          .col-md-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/sliders/pasos_10.svg', alt='Texto que describa la imagen')

    separador
    #t_6_3.titulo-segundo.color-acento-contenido
      h2 6.3 Slide navegación con títulos.

    p.mb-4 Es para textos un poco más extensos que en el tipo anterior y la imagen puede ser más ilustrativa. Ideal para explicar fases, etapas, acontecimientos (línea de tiempo) o procedimientos. Cada diapositiva tendrá un nombre referente a su contenido. Se recomienda usar máximo 10 pasos y mínimo 4.

    .tarjeta.tarjeta--gris.p-4
      PasosB.color-acento-contenido
        .row(titulo="Titulo 1")
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen

        .row(titulo="Titulo 2")
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/Slide_navegacion_numero_titulo.txt')" target="_blank" type="application/pdf")
          span Ver código fuente            

    hr.my-5

    .tarjeta.tarjeta--gris.p-4
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="Titulo 3")
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen


        .row(titulo="Titulo 4")
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen

          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/Slide_navegacion_titulo.txt')" target="_blank" type="application/pdf")
          span Ver código fuente  

    .row.mb-5
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
            ul.lista-ul.mb-0
              li
                i.fas.fa-angle-right.txt--orange
                | Título o subtítulo de la temática que se aborda
              li
                i.fas.fa-angle-right.txt--orange
                | Colocar una breve descripción del tema que se aborda en el slide
              li
                i.fas.fa-angle-right.txt--orange
                | Colocar el texto que va en cada diapositiva según el formato instruccional

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Ejemplo
      span navegación con títulos 
    LineaTiempoC.color-secundario(text-small)
      .row.align-items-center(titulo="Prehistoria").p-4
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/sliders/LT_01.png' alt='Hombres primitivos con un mamut').mb-4
        .col-lg-7
          h4 La tecnología en la prehistoria
          p Inicialmente el ser humano desarrolló avances tecnológicos como respuesta a la supervivencia y para eso elaboró instrumentos para cazar, protegerse de los animales, etc.

      .row.align-items-center(titulo="Edad Antigua").p-4
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/sliders/LT_02.png' alt='Hombres primitivos con un mamut').mb-4
        .col-lg-7
          h4 La tecnología en la Edad Antigua
          p En esta etapa de la historia se generó la escritura, sin embargo, las primeras plumas comenzaron a usarse en el año 3000 a.C. por la antigua civilización egipcia para la elaboración de papiros y otros manuscritos.
          p Por otra parte, es realmente asombroso que culturas antiguas como la egipcia y otras que surgieron miles de años antes de Cristo, tengan evidencia de enormes avances en ingeniería para la época y con construcciones de mucho nivel como los que se reflejan en las pirámides de Egipto.

      .row.align-items-center(titulo="Edad Media").p-4
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/sliders/LT_03.png' alt='Hombres primitivos con un mamut').mb-4
        .col-lg-7
          h4 La tecnología en la Edad Media
          p El ser humano empezó a emplear máquinas simples, como molinos de viento, y máquinas a vapor que permitan sustituir la tracción animal y generaban más eficiencia y permitían el comercio entre lugares lejanos. Algunos inventos correspondientes a esta época son: los relojes, molinos de viento, la brújula, entre otros.
          p En esta edad es representativo la invención de la imprenta, con la  cual mejoró notablemente la comunicación entre las diferentes poblaciones.

      .row.align-items-center(titulo="Edad Moderna").p-4
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/sliders/LT_04.png' alt='Hombres primitivos con un mamut').mb-4
        .col-lg-7
          h4 La tecnología en la Edad Moderna
          p Esta época se caracteriza por la invención de artefactos como el telescopio, microscopio, reloj de péndulo, lápiz, calculadora, entre otros.
          h5 Revoluciones industriales
          p El conocimiento de la física y la ciencia en general permitió que los avances siguieran siendo representativos a tal punto que se han vivido cuatro revoluciones industriales que influyeron no solo en la productividad, sino en el tipo de empleos y de emprendimientos que surgieron.

      .row.align-items-center(titulo="Contemporánea").p-4
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/sliders/LT_05.png' alt='Hombres primitivos con un mamut').mb-4
        .col-lg-7
          h4 La tecnología en la Edad Contemporánea
          h5 Transición de lo análogo a lo digital
          p Ahora pensemos por un momento en lo que sucedía en los años 90: si una persona quería entregar un trabajo escrito, debía hacerlo a mano o utilizar una máquina de escribir, esta última generó un impacto positivo para quien tenía dificultades al leer diversas caligrafías; pero si en la actualidad un joven utiliza esta máquina de seguro encontrará dificultades impensables hoy, por ejemplo si cometemos un error al escribir un texto hoy, simplemente lo borramos o presionamos “deshacer” en un software, pero con una máquina de escribir simplemente se arrancaba la hoja y había que empezar de nuevo.

      .row.align-items-center(titulo="Edad digital").p-4
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/sliders/LT_06.png' alt='Hombres primitivos con un mamut').mb-4
        .col-lg-8
          h4 La tecnología en la Edad Contemporánea
          h5 Tecnología móvil
          p Cuando los microchips empezaron a ser más conocidos y usados, la electrónica se extendió de manera más rápida y surgieron computadores, localizadores, elementos digitales y poco a poco fueron avanzando hasta llegar a tener diversos tamaños como por ejemplo en teléfonos donde se integran tecnologías de audio y video, con procesadores de textos, sistemas operativos que permiten realizar procesos para los cuales antes se necesitaban varios dispositivos.
          p Hoy un teléfono nos permite escanear un documento y enviarlo por correo en poco tiempo pero, además, permite que emprendedores de esta era puedan realizar un diseño de un banner con una simple aplicación móvil, subirlo a una red social o enviarlo por diversos sistemas de mensajería a muchos clientes.
          p Estamos en una era digital donde la información y la tecnología están al alcance de todos y es importante reflexionar sobre los aprendizajes que se vienen en los próximos años.

</template>

<script>
export default {
  name: 'Tema6',
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
