import { render, renderHook, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useElapsedTime } from 'use-elapsed-time'
import userEvent from '@testing-library/user-event'

import { CountdownCircle } from '.'

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

test('CountdownCircle should be in the document', () => {
  render(
    <CountdownCircle
      size={300}
      strokeWidth={25}
      duration={10}
      color="#8605EC"
      onComplete={() => {}}
    />,
  )

  const countdownCircle = screen.getByRole('progressbar', {
    name: /countdown/i,
  })

  expect(countdownCircle).toBeInTheDocument()
  expect(screen.getByText('10:00')).toBeInTheDocument()
})

test('The CountdownCircle should be able to play and pause', async () => {
  const user = userEvent.setup()

  render(
    <CountdownCircle
      size={300}
      strokeWidth={25}
      duration={25}
      color="#8605EC"
      onComplete={() => {}}
    />,
  )

  const playButton = screen.getByRole('button', { name: /play/i })

  expect(playButton).toBeInTheDocument()

  await user.click(playButton)

  const pauseButton = screen.getByRole('button', { name: /pause/i })

  expect(pauseButton).toBeInTheDocument()

  await user.click(pauseButton)

  expect(playButton).toBeInTheDocument()
})

test('The CountdownCircle should be able to reset', async () => {
  const user = userEvent.setup()

  render(
    <CountdownCircle
      size={300}
      strokeWidth={25}
      duration={25}
      color="#8605EC"
      onComplete={() => {}}
    />,
  )

  const resetButton = screen.getByRole('button', { name: /reset/i })

  await user.click(resetButton)

  expect(screen.getByText('25:00')).toBeInTheDocument()
})

test('the play button should be on the documennt when the user clicks on reset', async () => {
  const user = userEvent.setup()

  render(
    <CountdownCircle
      size={300}
      strokeWidth={25}
      duration={25}
      color="#8605EC"
      onComplete={() => {}}
    />,
  )

  const resetButton = screen.getByRole('button', { name: /reset/i })

  await user.click(resetButton)

  const playButton = screen.getByRole('button', { name: /play/i })

  expect(playButton).toBeInTheDocument()
})
