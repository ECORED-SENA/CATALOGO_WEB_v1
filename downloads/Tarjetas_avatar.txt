<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

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
