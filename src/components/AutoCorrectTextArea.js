import { useState } from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize'

export default function TextArea () {
  const [word, setWord] = useState('')
  const corrections = {
    realy: 'really',
    wierd: 'weird'
  }
  return (
    <div>
      <TextareaAutosize
        aria-label='minimum height'
        minRows={9}
        placeholder='Type Here'
        style={{ width: 350, backgroundColor: '#fd5d5d', color: '#f7e2e2' }}
        data-testid='textarea'
        value={word}
        onChange={(e) => {
          setWord(e.target.value)
          const strArr = word.split(' ')
          const objArr = Object.getOwnPropertyNames(corrections)
          strArr.map((d, i) => {
            const n = objArr.indexOf(d)
            if (n !== -1) {
              strArr[i] = corrections[objArr[n]]
              setWord(strArr.join(' ') + ' ')
            }
            return true
          })
        }}
      />
    </div>
  )
}
