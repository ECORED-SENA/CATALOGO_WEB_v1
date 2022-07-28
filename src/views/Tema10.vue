<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Pestañas o tabs

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        figure
          img(src="@/assets/curso/temas/pestañas/pestañas.svg", alt="alt")
      .col-lg-6
        .crd.clr-paleYellow.p-4.mb-4
          p.mb-0 La navegación por pestañas se refiere a la posibilidad de que varios paneles con información estén contenidos dentro de una sola ventana principal, usando pestañas para alternar entre ellos.

        p Se presenta la explicación o información en una especie de panel que provee toda la información en la pantalla principal conservando la introducción estática y ahondando a partir de pestañas, permitiendo la navegación entre ellas. Es recomendable usarla en: 
        .row.justify-content-center.align-items-center.ps-3
          .col-lg-6        
            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                p.mb-0 Tipologías 
              li 
                i.lista-ul__vineta
                p.mb-0 Etapas 
              li 
                i.lista-ul__vineta
                p.mb-0 Definiciones
          .col-lg-6        
            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                p.mb-0 Procesos 
              li 
                i.lista-ul__vineta
                p.mb-0 Secciones/subtemas 
              li 
                i.lista-ul__vineta
                p.mb-0 Nomenclaturas 

          p Es útil cuando se abordan temas como normas, decretos, leyes, condiciones etc. 


    separador
    #t_10_1.titulo-segundo.color-acento-contenido
      h2 10.1 Pestañas verticales    

    TabsA.color-acento-botones
      .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 1")
        h4 PASO 1: The splendor
        p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
          strong user style sheets
          |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
        p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

      .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 2")
        h4 PASO 2: The splendor
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
          .col-xl-6
            p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
              strong user style sheets
              |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/TabsA.txt')" target="_blank" type="application/pdf")
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
      span pestañas verticales 
    .row
      .col-lg-8.order-2.order-lg-1
        TabsA.color-acento-botones.mb-5        
          .tarjeta.clr-paleYellow.p-4(titulo="Leyes")
            h4 Leyes
            p Ley 100 de 1993 - Por la cual se crea el Sistema de Seguridad Social Integral y se dictan otras disposiciones.
              br
              br
              | Ley 1562 de 2012 - Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de salud ocupacional.

          .tarjeta.clr-paleYellow.p-4(titulo="Decretos")
            h4 Decretos
            p Decreto 1295 de 1994 - Determina la organización y administración del Sistema General de Riesgos Profesionales. 
              br
              br
              | Decreto 1072 de 2015 - Decreto Único Reglamentario del Sector Trabajo.
              br
              br
              | Decreto 780 de 2016 - Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social.
              br
              br
              | Decreto 2058 de 2018 - Por la cual se modifica el Título 2 de la Parte 1 y el artículo 2.1.5.1 del Decreto 780 de 2016, Único Reglamentario del Sector Salud y Protección Social.

          .tarjeta.clr-paleYellow.p-4(titulo="Resoluciones")
            h4 Resoluciones
            p Resolución 3310 de 2018 - Por la cual se adopta el Formulario Único de Afiliación y Reporte de Novedades al Sistema General de Riesgos Laborales y dictan otras disposiciones.
              br
              br
              | Resolución 2389 de 2019 - Por la cual se definen los lineamientos generales para la operación del Sistema General de Riesgos Laborales-SGRL en el Sistema de Afiliación Transaccional – SAT y se adopta el formulario de afiliación y traslado del empleador al Sistema General de Riesgos Laborales.
              br
              br
              | Resolución 2945 de 2019 - Por la cual se modifica la Resolución 2389 de 2019 en relación con la ampliación de unos plazos y se dictan otras disposiciones.
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/pestañas/pestañas_verticales.png", alt="alt", style="width:450px;").m-auto

    separador
    #t_10_2.titulo-segundo.color-acento-contenido
      h2 10.2 Pestañas horizontales - sencillas 

    TabsC.color-primario
      .py-3.py-md-4(titulo="The splendor of the mystery")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Celebrate your failures 1
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
      .py-3.py-md-4(titulo="Don’t lie to yourself")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
          .col-md-6
            h4 Celebrate your failures 2
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.         
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/TabsC.txt')" target="_blank" type="application/pdf")
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
      span pestañas horizontales - sencillas 

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Archivo de gestión o de oficina")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/pestañas/pestañas_01.png', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura Archivo de gestión o de oficina
            p En este archivo reposan los documentos generados en los procesos de gestión administrativa. El tiempo de permanencia de la documentación en este depende fundamentalmente del trámite y de las normas internas indicadas en las Tablas de Retención Documental - TRD para decidir su traslado al archivo central.

            p Las oficinas deberán transferir al archivo central aquellas series y subseries documentales que hayan cumplido el tiempo de retención señalado, toda transferencia debe ir acompañada de un inventario y debe hacerse de acuerdo con un cronograma previamente acordado entre quienes producen la documentación y la persona encargada del archivo.   

      .py-3.py-md-4(titulo="Archivo central o intermedio")
        .row.justify-content-center          
          .col-lg-7
            h4.txt--purpura Archivo central o intermedio
            p A este archivo son transferidos los documentos de los archivos de gestión cuya consulta no es tan frecuente, es decir, cuando están en su segundo ciclo de vida (semiactivos). El archivo central deberá facilitar la consulta tanto a las oficinas productoras como al público en general de acuerdo a las normas que lo regulen.
            p Recibidos los documentos en el archivo central, el jefe de este deberá constatar que las series y subseries documentales transferidas concuerdan con el inventario que las relaciona, para proceder a incorporarlas en las agrupaciones documentales correspondientes de acuerdo con el cuadro de clasificación establecido para cada oficina.
            p.mb-0 La documentación permanecerá en el archivo central durante el tiempo estipulado en las TRD. Antes de transferir al archivo histórico, se aplicará la disposición final y los procedimientos previstos en la TRD.
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/pestañas/pestañas_02.png', alt='').img400.m-auto      

      .py-3.py-md-4(titulo="Archivo histórico o permanente")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/pestañas/pestañas_03.png', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura Archivo histórico o permanente
            p Es aquel al cual se transfiere la documentación del archivo central o del archivo de gestión que, por decisión del correspondiente comité de archivos, debe conservarse permanentemente, dado el valor que adquiere para la investigación, la ciencia y la cultura.

            p.mb-0 Los procesos de organización de archivos son tres: clasificación, ordenación y descripción. A pesar de la aparente claridad, la primera dificultad que se encuentra al trabajar en archivos consiste en determinar qué se entiende archivísticamente por cada uno de ellos, pues las palabras mismas requieren atención por parte de los encargados de archivos para aclarar sus especificidades.

    separador
    #t_10_3.titulo-segundo.color-acento-contenido
      h2 10.3 Pestañas horizontales - iconos

    TabsB.color-primario
      .py-4.py-md-5(titulo="The splendor of the mystery" :icono="require('@/assets/componentes/ej-04.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Celebrate your failures 1
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
      .py-4.py-md-5(titulo="Don’t lie to yourself" :icono="require('@/assets/componentes/ej-04.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
          .col-md-6
            h4 Celebrate your failures 2
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/TabsB.txt')" target="_blank" type="application/pdf")
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
      span pestañas horizontales - iconos

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Animaciones" :icono="require('@/assets/curso/temas/pestañas/pestaña_icono_01.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p La palabra animación proviene del latín ánima, que significa alma o espíritu, de allí que el proceso de animación en producción gráfica, busca crear y dar  la ilusión de movimiento y vida sobre objetos  inanimados como  imágenes y fotografías, entre otros.
              br
              br
              |Este proceso enlaza diferentes secuencias de  dibujos que al darles una velocidad de  movimiento constante, por lo general de 24 cuadros por segundo, dan la sensación de vida y movimiento a los objetos. 
              br
              br
              |Se pueden encontrar diferentes tipos de animación como por ejemplo:                   
            p.text-bl <i><b>Stop motion.</b></i> Este tipo de animación es muy conocida y se logra haciendo una gran cantidad de tomas consecutivas de un objeto, movilizando entre toma y toma, que al ser unidas dan la sensación de movimiento. 
          .col-md-6.mb-4.mb-md-0
            img(src="@/assets/curso/temas/pestañas/pestaña_c1.svg" alt="Adornos flotantes")

      .py-4.py-md-5(titulo="Dibujos animados" :icono="require('@/assets/curso/temas/pestañas/pestaña_icono_02.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p La técnica de los dibujos animados es atribuida a Disney, y está dada por una sucesión de imágenes en dos dimensiones, a partir de fotogramas puestos en secuencia, que unidos dan la sensación de movimiento. 
          .col-md-6.mb-4.mb-md-0
            .tira_1

      .py-4.py-md-5(titulo="Plasmación" :icono="require('@/assets/curso/temas/pestañas/pestaña_icono_03.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p En esta técnica de animación se realizan y caracterizan personajes  principalmente en plastilina, los cuales se van moviendo muy lentamente de captura en captura. 
              br
              br
              |Dentro de algunas de las películas más importantes con esta técnica podemos encontrar, Pollitos en fuga y El extraño mundo de Jack. 
          .col-md-6.mb-4.mb-md-0
            .tira_2

      .py-4.py-md-5(titulo="Animación computarizada" :icono="require('@/assets/curso/temas/pestañas/pestaña_icono_04.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Este tipo de animación ha tenido gran auge en la última década ya que su parecido con la realidad, es casi imperceptible y no solo se limita a la creación de personajes para películas sino también se utiliza en videojuegos entre otros. En su creación son utilizados diversos programas que permiten generar realidades en 3D y en 4D. 
          .col-md-6.mb-4.mb-md-0
            .tira_3

      .py-4.py-md-5(titulo="Videos" :icono="require('@/assets/curso/temas/pestañas/pestaña_icono_05.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p El video es un sistema que permite la grabación simultánea de imágenes y  sonidos, en algunos casos en una cinta magnética y en otros por medios digitales, por una secuencia de captura de fotogramas de imágenes que luego en secuencia y a una velocidad considerable, generan movimiento. 
          .col-md-6.mb-4.mb-md-0
            .tira_4
      .py-4.py-md-5(titulo="Sliders" :icono="require('@/assets/curso/temas/pestañas/pestaña_icono_06.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Un slider es un recurso en diseño web, el cual consiste en mostrar diferentes imágenes, sonidos e incluso videos que se van deslizando unas sobre otras. Se puede interpretar como un carrusel o deslizador de diapositivas, el cual va ubicado generalmente en una parte destacada de la web. 
          .col-md-6.mb-4.mb-md-0
            .tira_5
              img(src="@/assets/curso/temas/pestañas/slider.svg" alt="Adornos flotantes")

</template>

<script>
export default {
  name: 'Tema10',
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
