<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

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
