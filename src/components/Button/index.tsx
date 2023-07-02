import { ButtonContainer } from '@/styles/components/Button';
import React from 'react'

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <ButtonContainer width={11} height={2.5}>
      {text}
    </ButtonContainer>
  )
}
