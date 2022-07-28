<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    TarjetaAudio.color-primario.mb-3(
      texto="Texto de muestra  "
      :audio="require('../../assets/componentes/audios/audio-ej.mp3')"
      @audio-hover="mostrarIndicadorTarjetaAudio = false"
    )
      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    TarjetaAudio.color-secundario.mb-3(
      texto="Texto de muestra <br> Texto de muestra "
      :audio="require('../../assets/componentes/audios/audio-ej.mp3')"
    )

</template>

<script>
export default {
  components: {},
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
