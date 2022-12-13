import { Send } from '@material-ui/icons'
import React from 'react'
import { Container,Title,Description,InputContainer,Button,Input } from './Newsletter.style';


const NewsLetter = () => {
  return (
    <div>
    <Container>
      <Title>
        Newsletter
      </Title>
      <Description>
        Let us know if you want to recieve our best offers nd deals ahead
      </Description>
      <InputContainer>
      <Input placeholder ="Your email is?"/>
      <Button>
        <Send />
      </Button>
      </InputContainer>
    </Container>
    </div>
  )
}

export default NewsLetter
