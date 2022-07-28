<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Líneas de tiempo

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        figure
          img(src="@/assets/curso/temas/linea_tiempo/linea_tiempo.svg", alt="alt")
      .col-lg-6
        .crd.clr-paleYellow.p-4.mb-4
          p.mb-0 Una línea del tiempo es una representación gráfica de una secuencia cronológica de los eventos de una historia, proceso o narración. Las líneas del tiempo, que se presentan en formato horizontal o vertical, les brinda a los usuarios un medio simplificado para comprender cómo los distintos eventos, personas y acciones desempeñaron un rol, o lo desempeñarán, en un proceso o período determinado. Las líneas del tiempo también se pueden combinar con texto y gráficos para producir infografías, que sirven para presentar fácilmente estadísticas, eventos históricos y otra información.

        p Se presenta la información en una secuencia lineal aportando datos específicos y concretos (con la posibilidad de estar cronológicamente organizados) acompañados, cada uno, de una imagen o ícono. En este recurso es posible clasificar la información a partir de: 
        .row.justify-content-start.align-items-center.ps-3
          .col-lg-6        
            ul.lista-ul--color      
              li 
                i.lista-ul__vineta
                p.mb-0 Palabras clave 
              li 
                i.lista-ul__vineta
                p.mb-0 Periodos de tiempo 
              li 
                i.lista-ul__vineta
                p.mb-0 Etapas 
              li 
                i.lista-ul__vineta
                p.mb-0 Fases             

    separador
    #t_11_1.titulo-segundo.color-acento-contenido
      h2 11.1 Línea de tiempo - vertical
    
    LineaTiempoE.color-primario
      .row(titulo="2014 - Present" subtitulo="Title, Company")
        .col-lg-6.mb-4.mb-lg-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        .col-lg-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen

      .row(titulo="2014 - Present" subtitulo="Title, Company")
        .col-lg-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen      
        .col-lg-6.mb-4.mb-lg-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/LineaTiempoE.txt')" target="_blank" type="application/pdf")
          span Ver código fuente

    .row.mb-5
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-botones       
          .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
            p Las líneas del tiempo están conformados por cuatro componentes básicos:
            ul.lista-ul.mb-4
              li 
                i.fas.fa-angle-right.txt--orange
                | Fechas: Marcar cuando un evento específico tiene lugar en una línea del tiempo.
              li 
                i.fas.fa-angle-right.txt--orange
                | Descripciones: Describir un evento determinado.
              li 
                i.fas.fa-angle-right.txt--orange
                | Encabezados (opcionales): Aportan más contexto en una línea del tiempo cuando se los agrega junto con una descripción.
              li 
                i.fas.fa-angle-right.txt--orange
                | Imágenes (optativas): Añaden interés gráfico e información adicional.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Ejemplo
      span línea de tiempo - vertical

    .row
      .col-12
        LineaTiempoE.color-acento-contenido.mb-5
          .row(titulo="1948")
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/linea_tiempo/lt_vert_01.svg', alt='Texto que describa la imagen')
            .col-lg-10.mb-4.mb-lg-0
              h4 Declaración Universal de los Derechos Humanos (DUDH) de la ONU
              p En esta carta firmada en 1948, plantea como un ideal que los seres humanos deben ser libres, gozar de libertades civiles y contar con la implementación de políticas que permitan que las personas no estén en condiciones de pobreza extrema. Si bien no es una ley o un documento obligatorio dado que cuando se promulgó no existía tanta consciencia sobre el tema, sirve actualmente como base para la creación de los Convenios Internacionales de la ONU y son la plataforma para elaborar códigos de inclusión o gobierno corporativo por parte de las empresas respecto al tema de la inclusión.
          .row(titulo="1983")
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/linea_tiempo/lt_vert_02.svg', alt='Texto que describa la imagen')
            .col-lg-10.mb-4.mb-lg-0
              h4 Convenio de 1983 de la Organización Internacional del Trabajo (OIT)
              p En esta carta, se plantean acciones para la readaptación profesional y el empleo para las personas inválidas, promoviendo de esta manera lo que ellos denominan el trabajo decente. Aquí se pone explícita la importancia del principio de igualdad de oportunidades entre los trabajadores inválidos y el resto de la fuerza laboral y se indica que debe existir oportunidades de acceso, promoción y conservación del empleo para las personas inválidas, por supuesto acorde con sus elecciones y aptitudes.
          .row(titulo="2006")
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/linea_tiempo/lt_vert_03.svg', alt='Texto que describa la imagen')
            .col-lg-10.mb-4.mb-lg-0
              h4 Convención sobre los Derechos de las Personas con Discapacidad 
              p El propósito de la presente Convención es promover, proteger y asegurar el goce pleno y en condiciones de igualdad de todos los derechos humanos y libertades fundamentales por todas las personas con discapacidad, y promover el respeto de su dignidad inherente. 
              p Las personas con discapacidad incluyen a aquellas que tengan deficiencias físicas, mentales, intelectuales o sensoriales a largo plazo que, al interactuar con diversas barreras, puedan impedir su participación plena y efectiva en la sociedad, en igualdad de condiciones con las demás.
          .row(titulo="2015")
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/linea_tiempo/lt_vert_04.svg', alt='Texto que describa la imagen')
            .col-lg-10.mb-4.mb-lg-0
              h4 Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas
              p Los ODS son 17 objetivos que plantean líneas de acción mundiales para que alrededor de temáticas que se consideran claves, los países y las empresas formulen planes y proyectos. En este sentido, en el objetivo cuatro se hace mención del tema de la inclusión cuando se plantea que debe ser un propósito garantizar una educación inclusiva, equitativa y de calidad para promover oportunidades de aprendizaje. 

    separador
    #t_11_2.titulo-segundo.color-acento-contenido
      h2 11.2 Línea de tiempo - horizontal

    .tarjeta.tarjeta--gris.p-4
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="1761")
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen


        .row(titulo="1798")
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen


        .row(titulo="1887")
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/LineaTiempoC.txt')" target="_blank" type="application/pdf")
          span Ver código fuente
    .row.mb-5
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-botones       
          .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
            p Las líneas del tiempo están conformados por cuatro componentes básicos:
            ul.lista-ul.mb-4
              li 
                i.fas.fa-angle-right.txt--orange
                | Fechas: Marcar cuando un evento específico tiene lugar en una línea del tiempo.
              li 
                i.fas.fa-angle-right.txt--orange
                | Descripciones: Describir un evento determinado.
              li 
                i.fas.fa-angle-right.txt--orange
                | Encabezados (opcionales): Aportan más contexto en una línea del tiempo cuando se los agrega junto con una descripción.
              li 
                i.fas.fa-angle-right.txt--orange
                | Imágenes (optativas): Añaden interés gráfico e información adicional.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Ejemplo
      span línea de tiempo - horizontal

    .tarjeta.bg3.p-4.mb-5
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

        .row.align-items-center(titulo="Edad Contemporánea").p-4
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

        .row.align-items-center(titulo="Emprendimiento digital").p-4
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/sliders/LT_07.png' alt='Hombres primitivos con un mamut').mb-4
          .col-lg-8
            h4 La tecnología y el emprendimiento digital
            p Los emprendimientos no son ajenos a la realidad de esta era digital, ya que muchos han ampliado sus canales de ventas y ya no solo tienen un espacio físico, sino también uno virtual y, en muchos casos, gratuitos como en redes sociales donde se pueden cerrar negocios por medio de pantallas y transacciones digitales. 
            p Las barreras de las distancias empiezan a desvanecerse y aparecen nuevas necesidades de aprendizaje y adaptación a estilos, negociaciones, habilidades blandas y digitales, entre otras. 
            p La era digital va a dar mucho de qué hablar y un emprendedor que analiza su entorno sabe que debe prepararse para todos estos cambios y apropiarse de estas nuevas habilidades.
  
</template>

<script>
export default {
  name: 'Tema11',
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
