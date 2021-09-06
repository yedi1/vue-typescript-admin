const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
  t /= d / 2
  if (t < 1) {
    return (c / 2) * t * t + b
  }
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}

// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
// eslint-disable-next-line func-names
const requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    (window as any).mozRequestAnimationFrame ||
    // eslint-disable-next-line func-names
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  )
})()

// Because it's so fucking difficult to detect the scrolling element, just move them all
const move = (amount: number) => {
  document.documentElement.scrollTop = amount
  ;(document.body.parentNode as HTMLElement).scrollTop = amount
  document.body.scrollTop = amount
}

const position = () => document.documentElement.scrollTop || (document.body.parentNode as HTMLElement).scrollTop || document.body.scrollTop

// eslint-disable-next-line import/prefer-default-export
export const scrollTo = (to: number, duration: number, callback?: Function) => {
  const start = position()
  const change = to - start
  const increment = 20
  let currentTime = 0
  duration = typeof duration === 'undefined' ? 500 : duration
  // eslint-disable-next-line func-names
  const animateScroll = function () {
    // increment the time
    currentTime += increment
    // find the value with the quadratic in-out easing function
    const val = easeInOutQuad(currentTime, start, change, duration)
    // move the document.body
    move(val)
    // do the animation unless its over
    if (currentTime < duration) {
      requestAnimFrame(animateScroll)
    } else if (callback && typeof callback === 'function') {
      // the animation is done so lets callback
      callback()
    }
  }
  animateScroll()
}
