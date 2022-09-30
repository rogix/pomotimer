import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useElapsedTime } from 'use-elapsed-time'

import { CountdownCircle } from './'

const setup = () => {
  const utils = render(
    <CountdownCircle
      size={300}
      strokeWidth={25}
      duration={1}
      color="#8605EC"
      onComplete={() => {}}
    />,
  )
  const button = utils.getByText('Play')
  return {
    button,
    ...utils,
  }
}

// test('CountdownCircle should be in the document', () => {
//   render(
//     <CountdownCircle
//       size={300}
//       strokeWidth={25}
//       duration={25}
//       color="#8605EC"
//       onComplete={() => {}}
//     />,
//   )

//   const countdownCircle = screen.getByText('CountdownCircle')

//   expect(countdownCircle).toBeInTheDocument()
// })

// test('The CountdownCircle should be able to play and pause', () => {
//   render(
//     <CountdownCircle
//       size={300}
//       strokeWidth={25}
//       duration={25}
//       color="#8605EC"
//       onComplete={() => {}}
//     />,
//   )

//   const playButton = screen.getByRole('button', { name: /play/i })
//   const pauseButton = screen.getByRole('button', { name: /pause/i })

//   expect(playButton).toBeInTheDocument()

//   fireEvent.click(playButton)

//   expect(pauseButton).toBeInTheDocument()

//   fireEvent.click(pauseButton)

//   expect(playButton).toBeInTheDocument()
// })

test("If the CountdownCircle's duration is 0, the stroke-dashoffset should be 0", () => {
  setup()

  const { elapsedTime } = useElapsedTime({
    duration: 0,
    isPlaying: true,
  })

  const circle = screen.getByTestId('circle')

  screen.debug(circle)

  expect(circle).toHaveStyle('stroke-dashoffset: 0')
})
