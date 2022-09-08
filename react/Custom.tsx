import React from 'react'

type Props = {
  name: string
}

function Custom({ name }: Props) {
  return <div>Hey, {name}</div>
}

export default Custom
