<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Audio

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        figure
          img(src="@/assets/curso/temas/audio/audio_00.svg", alt="alt")
      .col-lg-6
        .crd.clr-paleYellow.p-4.mb-4
          p.mb-0 Archivo en formato MP3 que se puede combinar con otros componentes interactivos para reforzar la explicación de un tema o concepto. Por ejemplo, se puede utilizar en conjunto con un slider de diapositivas para dar lugar a un sonoviso.  

    .titulo-segundo.color-acento-contenido
      h2 Ejemplos destacados

    img(src='@/assets/curso/temas/audio/15.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.g-0
      .col-lg-4
        .tarjeta.clr--pink.p-4.rounded-0.h-100
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-contenido.mb-3(
            texto="Mom, can you come with me to the doctor's office?"
            :audio="require('@/assets/curso/temas/audio/5.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.mb-0 Mamá, ¿puedes venir conmigo al consultorio del doctor?
      .col-lg-4
        .tarjeta.clr--pink02.p-4.rounded-0.h-100
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="How are you doing, Doctor? Nice to meet you."
            :audio="require('@/assets/curso/temas/audio/6.mp3')"
          )
            p.mb-0 ¿Cómo está, doctor? Es un placer conocerlo.
      .col-lg-4
        .tarjeta.clr--pink.p-4.rounded-0.h-100
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="Ok, Coach. I will follow your advice."
            :audio="require('@/assets/curso/temas/audio/7.mp3')"
          )
            p.mb-0 Muy bien, entrenador. Voy a seguir su consejo.
    .row.justify-content-end.mb-5.me-3
      .col-auto
        a.boton.color-acento-contenido.texto-blanco.b--rad(:href="obtenerLink('/downloads/Audio.txt')" target="_blank" type="application/pdf")
          span Ver código fuente
  

</template>

<script>
export default {
  name: 'Tema3',
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
