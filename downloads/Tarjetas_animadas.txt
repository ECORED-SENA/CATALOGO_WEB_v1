<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

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
