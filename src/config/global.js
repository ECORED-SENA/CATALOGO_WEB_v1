export default {
  global: {
    componenteFormativo: 'Catálogo de componentes web RED SENA',
    descripcionCurso:
      'El presente recurso contiene ejemplos del catálogo de componentes usados por el equipo de diseño y desarrollo al momento de virtualizar un programa de formación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/element_01.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/element_02.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/element_03.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/element_04.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/element_01.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Infografía',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Infografía interactiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Puntos calientes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Ventana modal',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Audio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Videos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Spot animado',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Infografía animada',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Motion',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Video clase',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Oferta del programa',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Actividades didácticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Diálogo',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Cuestionario',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Relación de términos',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Completar espacios',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Slider de diapositivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Slider simple',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Slider con Titulo',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Numeral o pasos',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Slider de imágenes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Carrusel de tarjetas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Acordeón',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '9.1',
            titulo: 'Acordeón (con viñeta en la izquierda) - tipo 1',
            hash: 't_9_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.2',
            titulo: 'Acordeón (con viñeta en la izquierda) - tipo 2',
            hash: 't_9_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.3',
            titulo: 'Acordeón con numeral / pasos',
            hash: 't_9_3',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Pestañas o tabs',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '10.1',
            titulo: 'Pestañas verticales',
            hash: 't_10_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.2',
            titulo: 'Pestañas horizontales - sencillas',
            hash: 't_10_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.3',
            titulo: 'Pestañas horizontales - iconos',
            hash: 't_10_3',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        icono: 'far fa-file-alt',
        numero: '11',
        titulo: 'Líneas de tiempo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '11.1',
            titulo: 'Línea de tiempo - vertical',
            hash: 't_11_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '11.2',
            titulo: 'Línea de tiempo - Horizontal',
            hash: 't_11_2',
          },
        ],
      },
      {
        nombreRuta: 'tema12',
        icono: 'far fa-file-alt',
        numero: '12',
        titulo: 'Rutas / Pasos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '12.1',
            titulo: 'Pasos - Verticales',
            hash: 't_12_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '12.2',
            titulo: 'Pasos - Horizontales',
            hash: 't_12_2',
          },
        ],
      },
      {
        nombreRuta: 'tema13',
        icono: 'far fa-file-alt',
        numero: '13',
        titulo: 'Tarjetas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '13.1',
            titulo: 'Tipo avatar',
            hash: 't_13_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '13.2',
            titulo: 'Conectadas',
            hash: 't_13_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '13.3',
            titulo: 'Animadas',
            hash: 't_13_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '13.4',
            titulo: 'Tarjetas con número',
            hash: 't_13_4',
          },
        ],
      },
      {
        nombreRuta: 'tema14',
        icono: 'far fa-file-alt',
        numero: '14',
        titulo: 'Estilos tipográficos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '14.1',
            titulo: 'Encabezados',
            hash: 't_14_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '14.2',
            titulo: 'Párrafos',
            hash: 't_14_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '14.3',
            titulo: 'TListados',
            hash: 't_14_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '14.4',
            titulo: 'Bloques de texto destacado',
            hash: 't_14_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '14.5',
            titulo: 'Citas',
            hash: 't_14_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '14.6',
            titulo: 'Título de figuras / imágenes',
            hash: 't_14_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '14.7',
            titulo: 'Video',
            hash: 't_14_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '14.8',
            titulo: 'Tablas',
            hash: 't_14_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '14.9',
            titulo: 'Llamados a la acción',
            hash: 't_14_9',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: '',
      significado: '',
    },
    {
      termino: '<em></em>',
      significado: '',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Ricardo Mutis Gómez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
  },
}
