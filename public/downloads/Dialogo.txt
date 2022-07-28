<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    Dialogo.color-primario(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Greeting the doctor. / Saludando al doctor.
      template(#descripcion-actividad) Escuche los audios y complete los espacios en blanco de cada una de las frases arrastrando el término correcto. 

</template>

<script>
export default {
  components: {},
  data: () => ({
    dialogo: {
      personajes: [
        {
          nombre: 'Hanna',
          img: require('@/assets/componentes/ej-05.svg'),
        },
        {
          nombre: 'Jhon',
          img: require('@/assets/componentes/ej-05.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Hanna',
          textoIng: 'I need the biology book and the sheets.',
          textoEsp: 'Yo necesito el libro de biologia y las diapositivas.',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Jhon',
          textoIng:
            'I need the *** book and the sheets book and the sheets book and the sheets book and the sheets.',
          textoEsp:
            'Yo necesito el libro de *** y las diapositivas Yo necesito el libro de Yo necesito el libro de Yo necesito el libro de .',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
          palabra: 'Biology1',
        },
        {
          personaje: 'Hanna',
          textoIng: 'I need the biology books and the ***.',
          textoEsp: 'Yo necesito el libro de biologia y las ***.',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
          palabra: 'sheets2',
        },
        {
          personaje: 'Jhon',
          textoIng: 'I *** the biology books and the sheets',
          textoEsp: 'Yo *** el libro de biologia y las diapositivas.',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
          palabra: 'need3',
        },
        {
          personaje: 'Hanna',
          textoIng: 'I need the biology books and the ***.',
          textoEsp: 'Yo necesito el libro de biologia y las ***.',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
          palabra: 'sheets4',
        },
      ],
    },
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
