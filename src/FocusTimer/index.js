import state from './state.js'
import { updateDisplay } from './timer.js'
import { registerControls } from './events.js'

export function start(min, sec) {
  state.minutes = min
  state.seconds = sec

  updateDisplay()
  registerControls()
}