/**
 * @summary
 * Use animation via glamor & glamorous
 */

import glamorous from 'glamorous'
import { css } from 'glamor'

const animationStyles = () => {
  const bounce = css.keyframes({
    '0%': { transform: `scale(1.01)` },
    '100%': { transform: `scale(0.99)` }
  })
  return { animation: `${bounce} 0.2s infinite ease-in-out alternate` }
}

// Define the element
const AnimatedDiv = glamorous.div(animationStyles)
AnimatedDiv.displayName = 'AnimatedDiv'

export default AnimatedDiv
