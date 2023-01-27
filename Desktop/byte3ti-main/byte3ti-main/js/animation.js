// Scrollreveal =  Animação ao descer e subir a pagina

const scrollRevealTop = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 2000,
  reset: true
})

scrollRevealTop.reveal('.card-15, .card-16, .card-17', {
  interval: 300
})

//////////////////////////////////////////////////////

const scrollRevealBottom = ScrollReveal({
  origin: 'bottom',
  distance: '100px',
  duration: 2000,
  reset: true
})

scrollRevealBottom.reveal(
  '.card-1, .card-2, #formulario, .card-3, .card-4, .card-5, .card-6, .card-7, .card-8',
  { interval: 300 }
)

const scrollRevealFixed = ScrollReveal({
  origin: 0,
  distance: 0,
  duration: 2000,
  reset: true,
  delay: 300
})

scrollRevealFixed.reveal(
  '.carousel-1, .section-1, .card-9, .card-10, .card-11, .card-12, .card-13, .card-14',
  { interval: 300 }
)

// 88**************************  Left

const scrollRevealLeft = ScrollReveal({
  origin: 'left',
  distance: '300px',
  duration: 2000,
  reset: true
})

scrollRevealLeft.reveal('.card-20, .card-19, .card-18', { interval: 300 })

// 88**************************  Escala

const scrollRevealScale = ScrollReveal({
  origin: 0,
  distance: 0,
  duration: 2000,
  reset: true,
  scale: 0.5
})

scrollRevealScale.reveal('.row-1, .form-1', { interval: 300 })
