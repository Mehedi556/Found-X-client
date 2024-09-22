import { Spinner } from '@nextui-org/spinner'
import React from 'react'

const Loading = () => {
  return (
    <div className="h-screen fixed inset-0 z-[999] bg-black/10 backdrop-blur-md flex justify-center">
      <Spinner size="lg" />
    </div>
  )
}

export default Loading