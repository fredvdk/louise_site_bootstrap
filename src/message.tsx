import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

export default function Message(props: {text: string, variant: string, show: boolean}) {
    

  return (
    <Alert variant={props.variant} show={props.show}> {props.text} </Alert>
  )
}
