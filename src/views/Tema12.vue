<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Rutas - Pasos

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        figure
          img(src="@/assets/curso/temas/pasos/pasos.svg", alt="alt")
      .col-lg-6
        .crd.clr-paleYellow.p-4.mb-4
          p.mb-0 El Slider de diapositivas es un componente web que permite representar de manera secuencial múltiples escenas o diapositivas, las cuales están compuestas de imágenes y texto. En algunos casos se puede hacer uso de componentes interactivos sencillos dentro de cada una de las diapositivas. 

        p Es un recurso similar al de acordeón, presenta la información en modales que se ocultan en el momento que se despliega una nueva información, es decir, siempre se va a presentar la información de uno de los modales. Algunos usos pueden darse en: 
        .row.justify-content-center.align-items-center.ps-3
          .col-lg-6        
            ul.lista-ul--color          
              li 
                i.lista-ul__vineta
                p.mb-0 Procesos 
              li 
                i.lista-ul__vineta
                p.mb-0 Secuencias 
              li 
                i.lista-ul__vineta
                p.mb-0 Tipificaciones
          .col-lg-6        
            ul.lista-ul--color 
              li 
                i.lista-ul__vineta
                p.mb-0 Secciones 
              li 
                i.lista-ul__vineta
                p.mb-0 Criterios 
              li 
                i.lista-ul__vineta
                p.mb-0 Clasificaciones 

          p Cuenta con nomenclatura en cada uno de los párrafos con literales o numerales, así que también puede usarse si contamos con un listado.

    separador
    #t_12_1.titulo-segundo.color-acento-contenido
      h2 12.1 Pasos - verticales
    .row.justify-content-between.align-items-center
      .col-md-6.mb-5.mb-md-0
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Praesent luctus")
            .col-md-6.mb-4.mb-md-0
              p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen

          .row(numero="2" titulo="Praesent luctus")
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
            .col-md-6.mb-4.mb-md-0
              p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.  

          .row(numero="3" titulo="Praesent luctus")
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
            .col-md-6.mb-4.mb-md-0
              p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion. 
        .row.justify-content-end.mb-5.me-3
          .col-auto
            a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/LineaTiempoD.txt')" target="_blank" type="application/pdf")
              span Ver código fuente                            
      .col-md-6.mb-5.mb-md-0            
        PasosA.color-acento-botones(tipo="n")
          .row
            .col-md-6.mb-4.mb-md-0
              h5 Lorem ipsum dolor sit amet.
              p This is another paragraph. I think it needs to be added that the set of elements tested is 
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen

          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la Imagen
            .col-md-6
              h5 Nullam vulputate mauris eros, ut.
              p This is another paragraph. I think it needs to be added that the set of elements tested 
        .row.justify-content-end.mb-5.me-3
          .col-auto
            a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/PasosA.txt')" target="_blank" type="application/pdf")
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
      h5 Ejemplo 1
      span pasos - verticales

    .row.justify-content-center.mb-5
      .col-8.col-lg-4
        figure
          img(src="@/assets/curso/temas/pasos/pasos_vert_00.png", alt="alt")
      .col-lg-8
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Precisión") La calidad de los datos se caracteriza por informes precisos y no confundir al responsable del tratamiento de esa información.

          p(numero="2" titulo="Integridad") Debe asegurarse que los datos transferidos o almacenados estén completos.

          p(numero="3" titulo="Presentación") La forma de visualizar un conjunto de datos es muy importante, debe permitir una excelente legibilidad y comprensión. Por lo tanto, se espera que los datos cuenten con una estructura muy bien organizada al momento de hacer su lectura y posteriormente procesarlos. 

          p(numero="4" titulo="Consistencia") Los datos conservan su valor después del procesamiento. Se espera que esto sea consistente y verificable. 

          p(numero="5" titulo="Validez") Los datos deben estar en el mismo formato original independientemente de la ubicación, de modo que todos coincidan cuando ejecute el proceso de validación. 

          p(numero="6" titulo="Disponibilidad") Al momento de solicitar la información, esta debe estar disponible.

    separador
    .titulo-sexto.color-acento-contenido.mb-3
      h5 Ejemplo 2
      span pasos - verticales    

    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="l")
          .row
            .col-lg
              h3 Modelar
              p En esta etapa es donde se inicia la recopilación de información de cada uno de los procesos de la organización, con el fin de conocer a cabalidad cuáles son los pasos que se adelantan, quiénes son los responsables, en dónde inicia y dónde termina el proceso, para con esta información crear el diagrama de flujo. Es en esta etapa donde se observan las oportunidades de mejora junto con las debilidades en el proceso. 
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/pasos/pasos_vert_01.svg', alt='').img125

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/pasos/pasos_vert_02.svg', alt='').img125
            .col-lg
              h3 Implementar
              p Dentro de la etapa de implementación es donde se va a definir la forma en la que se ejecuta cada proceso, las diferentes directrices y modelos de calidad a seguir.   

          .row
            .col-lg
              h3 Ejecutar
              p Esta es la fase de implementación y es clave que dentro del ciclo de gestión de los procesos se realice de manera correcta con las personas que están a cargo del proceso día a día para la adecuada identificación de obstáculos y diversas oportunidades de mejora, para que sea cada vez más eficiente. 
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/pasos/pasos_vert_03.svg', alt='').img125

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/pasos/pasos_vert_04.svg', alt='').img125
            .col-lg
              h3 Monitorear
              p Mientras el proceso está en ejecución e implementación es necesario que se realice una supervisión exhaustiva en donde constantemente se recoja información y cifras para un control verdadero del proceso. Esto con la finalidad de dar soporte y cumplimiento a las metas que se pactaron inicialmente y poder determinar cuáles son los impactos internos y externos dentro del proceso.

          .row
            .col-lg
              h3 Optimizar
              p En esta última etapa es donde se debe realizar un análisis para determinar cuáles de los factores encontrados funcionan o no funcionan dentro del proceso productivo. Allí se determinarán las medidas correctivas para que la ejecución del proceso tenga una mejora continua.  
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/pasos/pasos_vert_05.svg', alt='').img125

    separador
    #t_12_2.titulo-segundo.color-acento-contenido
      h2 12.2 Pasos - horizontales

    .tarjeta.tarjeta--gris.p-4
      PasosB.color-primario
        .row(titulo="Palabra")
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen


        .row(titulo="I think it needs to be")
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/PasosB.txt')" target="_blank" type="application/pdf")
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
      span pasos - horizontales

    .row.justify-content-center.mb-4
      .col-lg-12
        .crd.clr--gray.brd--rad.p-4
          PasosB.color-acento-contenido
            .row.justify-content-center(titulo="Paso 1").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Defina las preguntas
                p Lo primero a realizar en un proceso de investigación de datos es seleccionar las preguntas correctas y adecuadas. Es muy importante que estas preguntas sean medibles, concisas y sobre todo claras. Enfoque las preguntas con el fin de calificar o descalificar las posibles soluciones a un tema determinado (problema) u oportunidad concreta.         
              .col-lg-3.col-6
                figure
                  img(src='@/assets/curso/temas/pasos/pasos_hor_01.svg', alt='')

            .row.justify-content-center(titulo="Paso 2").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Determine que prioridades de medición va a utilizar 
                p Decida qué va a medir, es decir analice qué tipo de datos necesitará para el desarrollo de la actividad.
                p Decida cómo va a medirlo: tenga claro el cómo va a medir los datos, principalmente antes de la fase de la recolección de estos, puesto que el proceso de medición podrá defender o descalificar un análisis posterior.         
              .col-lg-3.col-6
                figure
                  img(src='@/assets/curso/temas/pasos/pasos_hor_02.svg', alt='') 

            .row.justify-content-center(titulo="Paso 3").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Recolecta los datos
                p Después de tener claramente la pregunta definida y las prioridades con las cuales se medirán, es el  momento adecuado para recopilar los datos, para este fin se debe tener en cuenta lo siguiente: 
                .crd.clr--paleGreen.p-4
                  ul.lista-ul--color.mb-0
                    li 
                      i.fas.fa-check
                      | Determine qué información va a recopilarse de las bases de datos o fuentes existentes.
                    li 
                      i.fas.fa-check
                      | Determina el sistema de almacenamiento de los datos y de igual forma, asigne un nombre para cada archivo.                    
                    li.mb-0 
                      i.fas.fa-check
                      | Organice el registro de datos por fechas.         
              .col-lg-3.col-6
                figure
                  img(src='@/assets/curso/temas/pasos/pasos_hor_03.svg', alt='')     

            .row.justify-content-center(titulo="Paso 4").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Analice los datos
                p Al momento de recopilar los datos adecuados para dar respuesta a las preguntas formuladas, se debe hacer un profundo análisis de información, pondere tendencias, encuentre similitudes, ordene y filtre la información de acuerdo a las variables encontradas, dentro del proceso de análisis se van encontrando datos acordes a su investigación.        
              .col-lg-3.col-6
                figure
                  img(src='@/assets/curso/temas/pasos/pasos_hor_04.svg', alt='')   

            .row.justify-content-center(titulo="Paso 5").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Interprete los resultados 
                p Posterior al análisis de los datos, es el momento de interpretar los resultados, para esto tenga en cuenta lo siguiente:          
                .crd.clr--paleGreen.p-4.mb-3
                  ul.lista-ul--color.mb-0
                    li 
                      i.fas.fa-check
                      | Los datos responden a la pregunta inicial.          
                    li 
                      i.fas.fa-check
                      | Los datos le permiten proteger cualquier objeción.          
                    li.mb-0
                      i.fas.fa-check
                      | Dentro de las conclusiones existe alguna limitación, que no le permita tener un óptimo recurso de datos.
                p.mb-0 Al momento de interpretar los datos probablemente tendrá una conclusión adecuada la cual le permitirá saber cómo va a utilizar los resultados de todo el proceso de recolección de datos.          
              .col-lg-3.col-6
                figure
                  img(src='@/assets/curso/temas/pasos/pasos_hor_05.svg', alt='')

</template>

<script>
export default {
  name: 'Tema12',
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
