import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

export default function SuccessForm() {

  const [reason, setreason] = useState("");  

  return (
    <div>
      <Alert variant='success'>OK {reason}</Alert>
    </div>
  )
}
