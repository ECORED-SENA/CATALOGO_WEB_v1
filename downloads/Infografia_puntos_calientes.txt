<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
    ImagenInfografica.color-primario
      template(v-slot:imagen)
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

      .tarjeta.color-acento-botones.p-3(x="20%" y="20%" numero="1")
        .h5.mb-2 titulo
        p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

      .tarjeta.color-acento-botones.p-3(x="50%" y="50%" numero="A")
        .h5.mb-2 titulo
        p Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

      .tarjeta.color-acento-botones.p-3(x="70%" y="70%" numero="B")
        .h5.mb-2 titulo
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

</template>

<script>
export default {
  components: {},
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
