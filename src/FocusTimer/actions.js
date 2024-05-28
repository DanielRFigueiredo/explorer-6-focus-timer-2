import state from "./state.js"
import { countDown } from "./timer.js"
import { updateDisplay } from "./timer.js"
import * as el from './elements.js'

export function play() {
  state.isRunning = true
  countDown()


}




export function pause() {
  console.log('pause')
  if (state.isRunning === true) {
    reset()
  } else {
    state.minutes = 25
    state.seconds = 0
    updateDisplay()
  }
}

export function increment() {
  if (state.isRunning === true) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  minutes += 5

  updateDisplay(minutes, seconds)


}
export function decrement() {

  if (state.isRunning === true) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  minutes -= 5

  if (minutes < 0) {
    minutes = 0
    seconds = 0
  }

  updateDisplay(minutes, seconds)



}

export function reset() {
  state.isRunning = false
}
