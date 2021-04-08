import React from 'react'
import clsx from 'clsx'
import './loader.css'

export default ({ status }) => (
  <div className={clsx('holder', { 'holder-animated': status === 'fetching' })}>
    <div
      className={clsx('box', 'box1', {
        'box1-at-rest': status === 'idle',
        'box1-animation': status === 'fetching',
      })}
    ></div>
    <div
      className={clsx('box', 'box2', {
        'box2-at-rest': status === 'idle',
        'box2-animation': status === 'fetching',
      })}
    ></div>
    <div
      className={clsx('box', 'box3', {
        'box3-at-rest': status === 'idle',
        'box3-animation': status === 'fetching',
      })}
    ></div>
    <div
      className={clsx('box', 'box4', {
        'box4-at-rest': status === 'idle',
        'box4-animation': status === 'fetching',
      })}
    ></div>
  </div>
)
