<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Acordeones

    .row.justify-content-center.align-items-center
      .col-lg-6
        figure
          img(src="@/assets/curso/temas/acordeones/acordeones.svg", alt="alt")
      .col-lg-6
        .crd.clr-paleYellow.p-4.mb-4
          p.mb-0 Un acordeón está formado por regiones desplegables que permiten mostrar u ocultar contenido pulsando sobre un botón.

        p Es un recurso que a simple vista no ocupa mayor espacio dado que la información está oculta dentro de botones desplegables. Consta de una imagen general al tema acompañada de las respectivas explicaciones. 

        p Ya que no demanda una imagen para cada botón puede usarse en caso de contar con una explicación muy grande, seccionada en subtítulos, igualmente para tipificaciones, fases, etapas, pasos o procedimientos con definiciones grandes. 

        p Su uso se recomienda cuando las secciones están estrechamente relacionadas con la introducción y se hace necesario que esta esté hilada constantemente. 
    
    separador
    #t_9_1.titulo-segundo.color-acento-contenido
      h2 9.1 Acordeón (con viñeta en la izquierda) - tipo 1

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Titulo item 1")
        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen

      div(titulo="Titulo item 2")
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/AcordionA.txt')" target="_blank" type="application/pdf")
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

    p.mb-4 A continuación, se destacan cuatro ejes principales que tienen que ver con las exigencias de calidad para el cliente, la mejora continua, satisfacción del cliente y la reglamentación en el cumplimiento de la norma, y en el siguiente recurso se detallan cada una de ellas.

    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/acordeones/acord_A_01.png", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="ISO 9000, (2005) Sistemas de Gestión de la Calidad. Definiciones y fundamentos")
              .col-12
                p.mb-0 Establece un punto de partida para comprender las normas y define los términos fundamentales utilizados en la familia de normas ISO 9000, que se necesitan para evitar malentendidos en su utilización, especificando el vocabulario clave a utilizar dentro del proceso. 

            .row(titulo="ISO 9001(2015). Sistemas de Gestión de la Calidad. Requisitos")
              .col-12
                p.mb-0 Es la norma que establece los criterios que permiten lograr eficazmente los requisitos del cliente y los reglamentarios, para conseguir la satisfacción del cliente. Incluye los principios de motivación y participación activa de la dirección como el ciclo de mejora continua. Es el único estándar que puede certificarse. Esta norma exige la elaboración de la documentación que debe conservar el sistema de gestión de calidad, sus políticas y procedimientos.

            .row(titulo="ISO 9004. Sistemas de Gestión de la Calidad. Directrices para la mejora del desempeño")
              .col-12
                p.mb-0 Sistemas de Gestión de la Calidad. Directrices para la mejora del desempeño: esta norma proporciona ayuda para la gestión del éxito sostenido del sistema de gestión de la calidad para beneficiar a todas las partes interesadas a través de las mejoras y el mantenimiento de la satisfacción del cliente. La Norma ISO 9004 abarca tanto la eficiencia como la eficacia del sistema de gestión de la calidad.  Se puede tomar como una ampliación de la norma anterior y no es certificable.

            .row(titulo="ISO 19011. Directrices para la auditoría ambiental y de la calidad")
              .col-12
                p.mb-0 Proporciona directrices para verificar la capacidad del sistema para conseguir objetivos de la calidad definidos. Esta norma se puede utilizar internamente para auditar a los proveedores de la organización.

    separador
    #t_9_2.titulo-segundo.color-acento-contenido
      h2 9.2 Acordeón (con viñeta en la derecha) - tipo 2 

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Titulo item 1")
        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen

      .row(titulo="Titulo item 2")
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen

        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/AcordionB.txt')" target="_blank" type="application/pdf")
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

    .row.justify-content-center
      .col-lg-8
        p Por lo anterior, se puede hablar de tres fases dentro de todo proceso productivo, las cuales se evidencian en el siguiente recurso de aprendizaje:

        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta clr--gris")
          .row(titulo="Fase 1: Etapa analítica - Acopio")
            .col-12
              p Es la primera etapa de todo proceso productivo, ya que allí se reúnen las materias primas que serán utilizadas en la fabricación de algún producto.
              p.mb-0 Es acá donde las empresas se centran en conseguir la mayor cantidad de insumos posibles y al menor costo. En esta etapa se debe tener en cuenta los costos de almacenamiento y transporte.   

          .row(titulo="Fase 2: Etapa de síntesis - Producción")
            .col-12
              p En el transcurso de esta etapa es donde las materias primas que se recolectaron previamente pasan por un proceso de transformación, para obtener el producto final que la organización va a comercializar. 
              p Acá es necesario que se definan los diferentes estándares de calidad y sus respectivos controles. 
              p.mb-0 Es de vital importancia que se realice un trabajo exhaustivo de observación y de monitoreo, para que se puedan anticipar cambios y dar cumplimiento a los objetivos pactados. 

          .row(titulo="Fase 3: Etapa de acondicionamiento - Procesamiento")
            .col-12
              p Es la etapa final del proceso donde se adapta el producto a las necesidades del cliente, para la comercialización, el transporte y almacenamiento, al igual que en la etapa analítica juegan un papel crucial, ya que se debe tener un control del producto terminado y unas condiciones adecuadas, para que no se arruine el producto de ninguna manera.
              p.mb-0 Una vez que el producto sea entregado, también es necesario realizar un control que permita establecer si el producto que se entregó cumple con los objetivos y los estándares de calidad que fueron previamente establecidos. 
   
      .col-lg-4.d-none.d-lg-flex
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/acordeones/acord_B_01.png", alt="alt").m-auto

    separador
    #t_9_3.titulo-segundo.color-acento-contenido
      h2 9.3 Acordeón con numeral / pasos
    .row.justify-content-center.align-items-top
      .col-md-6.mb-5.mb-md-0
        img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
      
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

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Ejemplo
      span Acordeón connumeral/pasos

    .row.justify-content-center.mb-5
      .col-lg-8
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Precisión") La calidad de los datos se caracteriza por informes precisos y no confundir al responsable del tratamiento de esa información.

          p(numero="2" titulo="Integridad") Debe asegurarse que los datos transferidos o almacenados estén completos.

          p(numero="3" titulo="Presentación") La forma de visualizar un conjunto de datos es muy importante, debe permitir una excelente legibilidad y comprensión. Por lo tanto, se espera que los datos cuenten con una estructura muy bien organizada al momento de hacer su lectura y posteriormente procesarlos. 

          p(numero="4" titulo="Consistencia") Los datos conservan su valor después del procesamiento. Se espera que esto sea consistente y verificable. 

          p(numero="5" titulo="Validez") Los datos deben estar en el mismo formato original independientemente de la ubicación, de modo que todos coincidan cuando ejecute el proceso de validación. 

          p(numero="6" titulo="Disponibilidad") Al momento de solicitar la información, esta debe estar disponible.
      .col-8.col-lg-4
        figure
          img.l.my-3(src="@/assets/curso/temas/pasos/pasos_vert_00.png", alt="alt")          
                             
</template>

<script>
export default {
  name: 'Tema9',
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
