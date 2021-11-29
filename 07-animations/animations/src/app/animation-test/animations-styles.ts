import {style} from '@angular/animations'

export const open = style({
  padding: '0.3rem',
  opacity: 1,
  backgroundColor: 'yellow',
  transform: 'translateX(100px)'
})

export const closed = style({
  height: '1.2rem',
  opacity: 0.5,
  backgroundColor: 'blue',
  color: 'white',
  transform: 'translateX(200px)'
})


export default {
  hola: "hola"
}
