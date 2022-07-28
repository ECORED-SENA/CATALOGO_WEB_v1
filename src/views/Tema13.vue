<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 13
      h1 Tarjetas
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        figure
          img(src="@/assets/curso/temas/tarjetas/tarjetas.svg", alt="alt")
      .col-lg-6
        .crd.clr-paleYellow.p-4.mb-4
          p.mb-0 Las tarjetas se utilizan para agrupar varios contenidos dentro de un contenedor que se puede replicar de manera modular en el contenido del sitio web. 

        p Es un forma de seccionar información un poco más amplia que en el carrusel de tarjetas, aunque igualmente se debe ser concreto en la explicación. Al ser tarjetas su intencionalidad está enfocada a dar un dato o definición específica, que el usuario pueda llevarse ese dato fácilmente en su memoria o asociarlo a un hecho rápidamente, puede usarse para: 
        .row.justify-content-start.align-items-center.ps-3
          .col-lg-6        
            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                p.mb-0 Definir roles específicos 
              li 
                i.lista-ul__vineta
                p.mb-0 Aclaraciones y excepciones 
              li 
                i.lista-ul__vineta
                p.mb-0 Caracterizaciones 
              li 
                i.lista-ul__vineta
                p.mb-0 Ventajas y desventajas
          .col-lg-6        
            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                p.mb-0 Datos curiosos 
              li 
                i.lista-ul__vineta
                p.mb-0 Explicaciones pequeñas y concretas 
              li 
                i.lista-ul__vineta
                p.mb-0 Resultados 
              li 
                i.lista-ul__vineta
                p.mb-0 Estadísticas   

    separador
    #t_13_1.titulo-segundo.color-acento-contenido
      h2 13.1 Tarjetas - avatar

    .row
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')

          h3.text-center Intuition important
          p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')

          h3.text-center Intuition important
          p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.color-acento-contenido.text-white--hover.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')

          h3.text-center Intuition important
          p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.

      .col-sm-6.col-lg-3
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')

          h3.text-center Intuition important
          p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/Tarjetas_avatar.txt')" target="_blank" type="application/pdf")
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
      span tarjetas - avatar 

    .bg_img_01
      .row.justify-content-center.mb-5
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tarjetas/tar_avatar_ver_01.png", alt="alt").img90.m-auto
            h4.text-center La medición
            p.text-center.mb-0 Los lideres del #[i marketing] se encargan de caracterizar todos los puntos de contacto de un cliente determinado y sus principales datos, conociendo los comportamientos y las prioridades de cada cliente con el fin de enlazar las acciones de #[i marketing] con los resultados comerciales.
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tarjetas/tar_avatar_ver_02.png", alt="alt").img90.m-auto
            h4.text-center Activación
            p.text-center.mb-0 Se enfoca en la toma asertiva de decisiones por intermedio de instrumentos de automatización con el fin de poder conectarse con los posibles clientes a gran escala, teniendo en cuenta que la estrategia será personalizada, dando respuesta a lo requerido por el cliente.
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tarjetas/tar_avatar_ver_03.png", alt="alt").img90.m-auto
            h4.text-center Formas de trabajar
            p.text-center.mb-0 Se centran en estructurar equipos agiles y de respuesta a oportuna, exclusivamente para los clientes, haciendo referencia a las tendencias de #[i marketing], teniendo en cuenta las perspectivas de medición y los canales en los que desarrollan.

    separador
    #t_13_2.titulo-segundo.color-acento-contenido
      h2 13.2 Tarjetas - conectadas

    .tarjeta--container.row
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')
          
        h2.text-center Celebrate your<br>failures
        p To surpass others is fucking tough, if you only do as you are told you don’t have it in you to succeed. Think about all the possibilities. You’ve been placed in the crucial moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
      .col-md.tarjeta.color-acento-botones.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')
          
        h2.text-center Sterility leads to<br>susceptibility
        p Remember it’s called the creative process, it’s not the creative moment. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect and accept the possibility of failure.
      .col-md.tarjeta.color-acento-contenido.text-white.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')
          
        h2.text-center Sterility leads to<br>susceptibility
        p Remember it’s called the creative process, it’s not the creative moment. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect and accept the possibility of failure.
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-primario.b--rad(:href="obtenerLink('/downloads/Tarjetas_conectadas.txt')" target="_blank" type="application/pdf")
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
      span tarjetas - conectadas

    .row.justify-content-center.mb-5
      .col-lg-9.position-relative
        h3.mb-4.text-center.txt--purpura Elementos determinantes para el análisis - CAC 
        .avatar
          figure
            img(src="@/assets/curso/temas/tarjetas/conectada_01.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tarjetas/conectada_02.svg", alt="alt").img100
            .col
              h5 Calidad de la información
              p Es importante tener en cuenta las variables, la ponderación de estas refleja la calidad de la información, la cual le permitirá obtener información concreta, clara y medible. Es necesario resaltar las características determinantes desde enfoques cualitativos y cuantitativos del dato obtenido. 
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tarjetas/conectada_02.svg", alt="alt").img100
            .col
              h5 Aplicación de técnicas
              p Desarrolle técnicas que le permitan tener un panorama completo de la información que se esté analizando, integrando las variables obtenidas en la medición y contrastando detalladamente los datos.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tarjetas/conectada_03.svg", alt="alt").img100
            .col
              h5 Comunicación correcta de los resultados
              p En los análisis de resultados, el determinante es saber mostrar la información, tenga en cuenta la objetividad, la claridad, la transparencia y la organización de la información. 

    separador
    #t_13_3.titulo-segundo.color-acento-contenido
      h2 13.3 Tarjetas - animadas

    .row
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1 John Doe
              p Lorem ipsum dolor sit amet, 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tarjetas/avatar.svg')})`}")

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tarjetas/avatar.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1 John Doe
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.

      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.derecha.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tarjetas/avatar.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1 John Doe
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.

      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-slide.izquierda.color-acento-botones(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tarjetas/avatar.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1 John Doe
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/Tarjetas_animadas.txt')" target="_blank" type="application/pdf")
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
      span tarjetas - animadas

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tarjetas/tar_hover_01.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Reporte de ventas diarias 
            p.mb-0 Con este tipo de reportes, los gerentes podrán supervisar específicamente, la labor de cada vendedor y de esta manera, saber en qué les va bien y en cuáles actos hay que mejorar. Aquí también, va a encontrar si su fuerza de ventas está entendiendo sus estrategias y le sea más fácil incentivarlos a aumentar su productividad.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tarjetas/tar_hover_02.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Reporte de ventas semanal
            p.mb-0 Con estos reportes semanales, podrá encontrar las dificultades que pueda tener algún o algunos vendedores y evitar que se pierdan los clientes fijos. Reportar semanalmente, le permite tener un equipo de ventas fortalecido y bien direccionado, con las correcciones necesarias para lograr las metas de ventas propuestas.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tarjetas/tar_hover_03.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Reporte de ventas mensuales
            p.mb-0 Con este tipo de reportes usted va a hacer un seguimiento específico a su equipo de ventas respecto a sus objetivos empresariales a largo plazo.    


    separador
    #t_13_3.titulo-segundo.color-acento-contenido
      h2 13.3 Tarjetas con número

    .row
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Ruta integral de atención en salud 
          p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Ruta integral de atención en salud 
          p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Ruta integral de atención en salud 
          p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Ruta integral de atención en salud 
          p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas      
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/Tarjetas_con_numero.txt')" target="_blank" type="application/pdf")
          span Ver código fuente 
</template>

<script>
export default {
  name: 'Tema13',
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
