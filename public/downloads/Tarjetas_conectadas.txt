<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .tarjeta--container.row.mb-5
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

</template>

<script>
export default {
  components: {},
  data: () => ({}),
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
