<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 14
      h1 Estilos tipográficos

    #t_14_1.titulo-segundo.color-acento-contenido
      h2 14.1 Encabezados
    h3.mb-5 #[i.fas.fa-angle-double-right.txt--orange] Estilo de título para el índice de contenidos:             
    .row.justify-content-center.align-items-center
      .col-11
        .titulo-principal.color-acento-botones
          .titulo-principal__numero
            span 1
          h1 Título principal, 30pt        

        .titulo-segundo.color-primario
          h2 1.1  Título de segundo nivel, 24pt

        h3.titulo-tercero Título de tercer nivel, 20pt 

    .row.justify-content-center.mb-5
      .col-auto
        a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Encabezados.txt')" target="_blank" type="application/pdf")
          span Ver código fuente 

    separador
    #t_14_2.titulo-segundo.color-acento-contenido
      h2 14.2 Párrafos
    p.mb-5 Los párrafos mantienen un tamaño regular de 16 pt con interlineado base de 24 pt, sin embargo, existe excepciones para resaltar contenido donde se puede hacer uso de pesos 
      span.text-thin THIN, 
      span.text-bold BOLD, 
      | y 
      span.text-black BLACK 
      | o 
      span.etiqueta etiquetas
      | de color (según paleta del programa). Así mismo, el ancho de los cajones textos permite variación en las doce (12) columnas. 

    .row.justify-content-center.mb-5
      .col-auto
        a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Encabezados.txt')" target="_blank" type="application/pdf")
          span Ver código fuente 

    separador
    #t_14_3.titulo-segundo.color-acento-contenido
      h2 14.3 Listados
    p.mb-5 Se debe tener en cuenta que las personas realizan un escaneo del mismo para encontrar elementos de su interés. Las listas deben estar compuestas por elementos relacionados entre sí, con un orden específico o un conteo importante.

    .row.mb-5
      .col-md.mb-5.mb-sm-0
        h4 Listado ordenado básico
        ol.lista-ol
          li 
            span.text-bold 1. 
            | Item lista ordenada 1
          li 
            span.text-bold 2. 
            | Item lista ordenada 2
          li 
            span.text-bold a. 
            | Item lista ordenada a
          li 
            span.text-bold b. 
            | Item lista ordenada b 

      .col-sm.mb-5.mb-sm-0
        h4 Listado ordenado cuadro color
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Item lista ordenada 1
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Item lista ordenada 2
          li 
            .lista-ol--cuadro__vineta
              span a
            | Item lista ordenada a
          li 
            .lista-ol--cuadro__vineta
              span b
            | Item lista ordenada b

      .col-sm.mb-5.mb-sm-0
        h4 Listado ordenado cuadro color + separadores
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Item lista ordenada 1
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Item lista ordenada 3
          li 
            .lista-ol--cuadro__vineta
              span a
            | Item lista ordenada a
          li 
            .lista-ol--cuadro__vineta
              span b
            | Item lista ordenada b

    .row
      .col-sm.mb-5.mb-sm-0
        h4 Listado no ordenado básico
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Item lista no ordenada
          li
            ul
              li 
                i.lista-ul__vineta
                | Item lista no ordenada
              li 
                i.lista-ul__vineta
                | Item lista no ordenada
          li 
            i.lista-ul__vineta
            | Item lista no ordenada
          li 
            i.lista-ul__vineta
            | Item lista no ordenada 
      .col-sm.mb-5.mb-sm-0
        h4 Listado no ordenado color
        ul.lista-ul--color
          li 
            i.fas.fa-brain
            | Item lista no ordenada
          li
            ul
              li 
                i.fas.fa-bug
                | Item lista no ordenada
              li 
                i.fas.fa-car-side
                | Item lista no ordenada
          li 
            i.fas.fa-compass
            | Item lista no ordenada
          li 
            i.fas.fa-eye
            | Item lista no ordenada 

      .col-sm
        h4 Listado no ordenado color + separadores
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Item lista no ordenada
          li.pb-0
            ul
              li 
                i.fas.fa-cookie
                | Item lista no ordenada
              li 
                i.fas.fa-hat-wizard
                | Item lista no ordenada
          li 
            i.fas.fa-hippo
            | Item lista no ordenada
          li 
            i.fas.fa-kiwi-bird
            | Item lista no ordenada                                                          
    .row.justify-content-center.mb-5
      .col-auto
        a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Listas.txt')" target="_blank" type="application/pdf")
          span Ver código fuente 

    separador
    #t_14_4.titulo-segundo.color-acento-contenido
      h2 14.4 Bloques de texto destacado
    p.mb-5 Cuando se tiene una información sencilla que se puede explicar en un solo párrafo y acompañada por una imagen es pertinente usar esta herramienta ya que se puede combinar perfectamente con cualquiera de las herramientas anteriormente descritas. Se puede utilizar cuando tenemos un solo bloque de texto, sin subtópicos, listas, ramificaciones y demás divisiones, complementándolo con las demás herramientas. 

    .row
      .col-lg-4
        .cajon.color-acento-contenido.p-4
          .h5 Cajón texto color
          p Se puede usar dos o más columnas para diagramar el texto, estos elementos pueden presentar contenedores que permitan diferenciar ideas o conceptos.
      .col-lg-8
        .cajon.color-acento-botones.p-4
          .h5 Cajón texto color
          p Se puede usar dos o más columnas para diagramar el texto, estos elementos pueden presentar contenedores que permitan diferenciar ideas o conceptos.    
    hr.my-5
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Think about all the possibilities. A good composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Nothing of without working at it. Be impossible to ignore.
          br
          br
          | Stand so tall that they can’t look past you. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect accept possibility of failure.           
    .row.justify-content-center.mt-5
      .col-auto
        a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Cajon.txt')" target="_blank" type="application/pdf")
          span Ver código fuente 

    separador
    #t_14_5.titulo-segundo.color-acento-contenido
      h2 14.5 Citas
    .row
      .col-lg-6.mb-5.mb-lg-0
        h3.titulo-tercero Cajón texto color B
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-0 Can we all just agree as the greater design community to stop talking about Comic Sans altogether?
            i.fas.fa-quote-right

      .col-lg-6
        h3.titulo-tercero Cajón texto color C
        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-right
          h2.mb-2 Then you’ll prove to yourself that you can survive anything.
          span - The graphic designer
    hr.my-5
    .bloque-texto-f.color-primario.pt-4.px-5.mb-5
      .bloque-texto-f__comillas
        i.fas.fa-quote-left
        i.fas.fa-quote-right
      h4.text-regular.bloque-texto-f__texto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt augue in augue tempus, in dapibus justo interdum. Sed viverra sed odio quis rhoncus. In elementum purus massa, id venenatis purus ullamcorper ut. Vestibulum vel dictum dolor, nec fringilla orci. Nulla vestibulum, metus nec porttitor bibendum, lectus ligula viverra eros, eget tempor risus nulla pretium justo. Nullam turpis dolor, pharetra vel fermentum at, rutrum in elit. Maecenas vitae hendrerit libero, et ornare augue. Vestibulum iaculis, metus et accumsan malesuada, ligula sapien convallis risus, a iaculis velit ante at turpis. Vivamus bibendum tellus sed tincidunt rhoncus. Nam velit massa, porttitor eget quam et, porttitor viverra eros. Donec eget pharetra metus. Cras porta arcu eu mauris iaculis euismod. Sed fringilla vel nisl quis aliquam.
      .bloque-texto-f__autor.mb-3
        h3.mb-0 The graphic designer
      .bloque-texto-f__avatar
        .bloque-texto-f__avatar__img
          img(src='@/assets/template/img-placeholder-1-1.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.mt-5
      .col-auto
        a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Citas.txt')" target="_blank" type="application/pdf")
          span Ver código fuente 

    separador
    #t_14_6.titulo-segundo.color-acento-contenido
      h2 14.6 Título de figuras / imágenes 

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Título de sexto nivel, 16pt
      span subtitulo  
          
    figure
      img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
      figcaption Leyenda de la imagen 

    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/Imagenes.txt')" target="_blank" type="application/pdf")
          span Ver código fuente 

    separador
    #t_14_7.titulo-segundo.color-acento-contenido
      h2 14.7 Video 
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/video.txt')" target="_blank" type="application/pdf")
          span Ver código fuente                

    separador
    #t_14_8.titulo-segundo.color-acento-contenido
      h2 14.8 Tablas
    .tabla-a.color-acento-botones 
      table
        caption Leyenda de la tabla
        thead
          tr
            th Encabezado 1
            th Encabezado 2
            th Encabezado 3
            th Encabezado 4
            th Encabezado 5
        tbody
          tr
            td Celda 1
            td Celda 2
            td Celda 3
            td Celda 4
            td Celda 5
          tr
            td Celda 1
            td Celda 2
            td Celda 3
            td Celda 4
            td Celda 5
          tr
            td Celda 1
            td Celda 2
            td Celda 3
            td Celda 4
            td Celda 5
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-primario.b--rad(:href="obtenerLink('/downloads/Tabla1.txt')" target="_blank" type="application/pdf")
          span Ver código fuente

    hr.my-5

    .tabla-b.color-acento-contenido
      .tabla-b__header
        h4.mb-0 Niveles del lenguaje
      table
        caption Leyenda de la tabla
        tr
          th Vulgar
          td Get back to work. Learn from criticism. Creativity is a work-ethic. Design as if your life depended on it. Keep going. It isn’t what you are.
        tr
          th Coloquial
          td It isn’t what you are, but what you’re going to become. Don’t censor yourself.  Sterility leads to susceptibility.It is, in effect, conditioned to prefer bad design.
        tr
          th Convencional o estándar
          td Paul Rand once said, “The public is more familiar with bad design than good design. leassuring. You are not your work. Don’t fucking lie to yourself. Life depended on it. Keep going
        tr
          th Técnico
          td The new becomes threatening, the old reassuring.” You are not your work. Don’t lie to yourself. Never, never assume that what Respect your craft. Widows and orphans are terrible.
        tr
          th Formal
          td Design as if your life depended on it. Keep going. It isn’t what you are, but what you’re going to become. Don’t censor yourself. 
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-botones.b--rad(:href="obtenerLink('/downloads/Tabla2.txt')" target="_blank" type="application/pdf")
          span Ver código fuente 

    hr.my-5

    .tabla-c
      table
        caption Leyenda de la tabla
        tr
          th 03 de marzo
          td 
            p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
          td
            .h6.mb-0 $12.500.200
          td
            .h6.mb-0 $12.500.200
            span.text-small Textos pequeños
          td
            .h6 FDSD33
        tr
          th 03 de marzo
          td 
            p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
          td
            .h6.mb-0 $12.500.200
          td
            .h6.mb-0 $12.500.200
            span.text-small Textos pequeños
          td
            .h6 FDSD33
        tr
          th 03 de marzo
          td 
            p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
          td
            .h6.mb-0 $12.500.200
          td
            .h6.mb-0 $12.500.200
            span.text-small Textos pequeños
          td
            .h6 FDSD33
        tr
          th 03 de marzo
          td 
            p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
          td
            .h6.mb-0 $12.500.200
          td
            .h6.mb-0 $12.500.200
            span.text-small Textos pequeños
          td
            .h6 FDSD33
        tr
          th 03 de marzo
          td 
            p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
          td
            .h6.mb-0 $12.500.200
          td
            .h6.mb-0 $12.500.200
            span.text-small Textos pequeños
          td
            .h6 FDSD33          
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/Tabla3.txt')" target="_blank" type="application/pdf")
          span Ver código fuente 

    separador
    #t_14_9.titulo-segundo.color-acento-contenido
      h2 14.9 Llamados a la acción
    h3.mb-5 #[i.fas.fa-angle-double-right.txt--orange] Botón modal 
    .row
      .col-auto
        a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
          span Abrir modal
          .indicador--click(v-if="mostrarIndicador")
      .col
        p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t 
          a.lnk(@click="modal1 = true") Abrir modal 
          |the height of your stature, it’s the heft of your spirit.
    
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          h4 Modal 1
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen

    .row.justify-content-center.mb-5
      .col-auto
        a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Modal.txt')" target="_blank" type="application/pdf")
          span Ver código fuente 

    h3.mb-5 #[i.fas.fa-angle-double-right.txt--orange] Recursos y enlaces externos
    .row
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
          
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
          
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
          
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
          
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-ppt.svg")
          .anexo__texto
            p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
          
        a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias         
    .row.justify-content-center.mb-5
      .col-auto
        a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Externos.txt')" target="_blank" type="application/pdf")
          span Ver código fuente 
</template>

<script>
export default {
  name: 'Tema14',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
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
