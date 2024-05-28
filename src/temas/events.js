import { temas } from "./elements.js";
import { souds } from "./souds.js";
import { pauseAllSounds, removeClassActionAllTema, addClassActionForElementClicked } from "./actions.js";

temas.forEach(tema => {
  tema.addEventListener('click', (e) => {
    removeClassActionAllTema()
    pauseAllSounds()

    const temabase = e.currentTarget.dataset.tema
    if (typeof souds[temabase].play !== 'function') return
    souds[temabase].play()

    addClassActionForElementClicked(e)
  })
})


