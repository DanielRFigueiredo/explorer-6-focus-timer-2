import { souds } from "./souds.js";
import { temas } from "./elements.js";

export function pauseAllSounds() {
  for (let sound in souds) {
    souds[sound].pause()
  }
}

export function removeClassActionAllTema() {
  temas.forEach(tema => {
    tema.classList.remove('active')

  })
}

export function addClassActionForElementClicked(element) {
  element.currentTarget.classList.add('active')
}