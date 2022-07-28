<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4 
      h1 Videos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        figure
          img(src="@/assets/curso/temas/video/video.svg", alt="alt")
      .col-lg-6
        .crd.clr-paleYellow.p-4.mb-4
          p Cada tema relacionado en los contenidos de un recurso educativo digital puede incluir el desarrollo de los siguientes tipos de recursos audiovisuales: #[strong Spot animado, motion graphics y video clases.]
          p.mb-0 Se realizan #[strong videos temáticos] para reforzar la explicación de tema o concepto del recurso educativo digital y también #[strong videos de oferta] para hacerle publicidad al programa  que se está desarrollando.

    .row
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-botones       
          .tarjeta.clr--gris.p-4(titulo="Requerimientos del guion")
            ul.lista-ul.mb-0
              li 
                i.fas.fa-angle-right.txt--orange
                | El guion debe tener una extensión de máximo 500 palabras (ó 24 líneas de texto) que equivalen a 3 minutos, ya que 1 minuto equivale a 166 palabras.
              li 
                i.fas.fa-angle-right.txt--orange
                | Se sugiere que este segmentado por escenas, cada escena con un texto de máximo 25 palabras y dejar palabras destacadas en negrilla.
              li 
                i.fas.fa-angle-right.txt--orange
                | La información debe ser explicada de forma clara y sencilla, que se pueda dar a nivel visual, para esto se requiere imágenes o analogías que aclaren aun concepto cercano.
              li 
                i.fas.fa-angle-right.txt--orange
                | El texto debe estar de forma editable no en imagen, de manera que se pueda copiar y pegar.
              li 
                i.fas.fa-angle-right.txt--orange
                | Si el guion trae tablas no deben ser complejas ni muy largas, dada la naturaleza del recurso.

          .tarjeta.clr--gris.p-4(titulo="Tipos de recursos audiovisuales")    
            ul.lista-ul.mb-4
              li 
                i.fas.fa-angle-right.txt--orange
                | Spot animado, incluye la animación de personajes utilizando técnicas tradicionales de animación 2d.
              li 
                i.fas.fa-angle-right.txt--orange
                | Motion graphics, incluyen: animación de imágenes, recursos fotográficos y material pregrabado de audio y video.
              li 
                i.fas.fa-angle-right.txt--orange
                | Video clase, se genera a partir de un video el que el experto temático presenta pantalla con un tema específico o tutorial  y desde el equipo de producción se realizan las actividades de edición de video que incluye procesos como musicalización, limpieza de audio y adición de cortinillas intro/outro.
              li 
                i.fas.fa-angle-right.txt--orange
                | Live Action video en ambientes de aprendizaje y trabajo en exteriores, producción audiovisual generalmente realizada en un ambiente de aprendizaje donde están ubicadas los equipos, mesas de trabajo y/o maquinaria. Se requiere agendar con anticipación las jornadas de grabación.            

            p.mb-0 #[strong Para la realización de los anteriores recursos audiovisuales se sugiere entregar solamente el guion con las indicaciones pertinentes y a partir del mismo el equipo de producción define el tipo de video a desarrollar.]

    separador     

    .titulo-segundo.color-acento-contenido
      h2 Ejemplos destacados

    #t_4_1
    h3.mb-3 #[i.fas.fa-angle-double-right.txt--orange] Video - Spot animado

    TabsA.color-acento-botones.mb-5    
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 1")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/-rq4_7xgFLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  

      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 2")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/cCxnzKy-hLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 3")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/8gZTBdLt_IM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            

      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 4")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/B9m7htWTfLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)         

      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 5")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/OjFiFv0OTQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            

    #t_4_2
    h3.mb-3 #[i.fas.fa-angle-double-right.txt--orange] Video - animación 2D

    TabsA.color-acento-botones.mb-5    
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 1")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/3KDDv2LrIcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    

      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 2")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/MbPhrvkKgH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)   
           

      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 3")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/QCcIP7JTo-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  

      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 4")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/p46ll0IMsHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 5")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/BP8OeszBSCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    #t_4_3
    h3.mb-3 #[i.fas.fa-angle-double-right.txt--orange] Video - motion

    TabsA.color-acento-botones.mb-5    
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 1")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)     
   
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 2")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/8EuGaDjVbjA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            

      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 3")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Z9zSnDD46IU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)       

      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 4")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/-G8D2UP9ZiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)              

      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 5")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/GXTHrucLiac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    #t_4_4
    h3.mb-3 #[i.fas.fa-angle-double-right.txt--orange] Video - clase /  tutorial

    .row.mb-5
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-botones       
          .tarjeta.clr--gris.p-4(titulo="Requerimientos del guion")
            ul.lista-ul.mb-0
              li                 
                i.fas.fa-angle-right.txt--orange
                | Se debe especificar el nombre del experto temático.              
              li 
                i.fas.fa-angle-right.txt--orange
                | Todo material de apoyo debe estar realizado en la plantilla institucional - SENA.
              li 
                i.fas.fa-angle-right.txt--orange
                | Los contenidos pertenecientes al material de apoyo deben tener una correcta ortografía, ser legibles y que presenten un  buen uso del color (evitar colores muy contrastantes). 
              li 
                i.fas.fa-angle-right.txt--orange
                | Señalar términos o palabras destacadas en negrilla para resaltarlas en pantalla.
              li 
                i.fas.fa-angle-right.txt--orange
                | El material de apoyo deberá ser entregado al equipo de Diseño y Desarrollo RED.                  
              li 
                i.fas.fa-angle-right.txt--orange
                | Los videos deben ser entregados sin edición alguna, es decir, sin agregar textos, música de fondo, animaciones, etc.    
                 
              li 
                i.fas.fa-angle-right.txt--orange
                | Calidad de video: FHD - 1920*1080. Software recomendado OBS Studio. 

    TabsA.color-acento-botones.mb-5    
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 1")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/1p9t9ymdH6Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 2")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/mgvJvJ_OO2o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  

      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 3")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/j_4Cm4ZZWQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo - 4")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/xkfoHMVK2Ak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
      
    #t_4_5
    h3.mb-5 #[i.fas.fa-angle-double-right.txt--orange] Video - oferta del programa

    .row.justify-content-center
      .col-lg-11
        .crd.crd--border.p-4
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/jASywqOHrQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      


</template>

<script>
export default {
  name: 'Tema4',
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
