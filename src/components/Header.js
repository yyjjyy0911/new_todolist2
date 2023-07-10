import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Header = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000)
    return () => clearInterval(id) // 뒷정리 함수
  })

  return (
    <div>
      <h3>오늘은 📅</h3>
      <H1>{time.toDateString()}</H1>
    </div>
  )
}

const H1 = styled.h1`
  color: #de4e40;
`;

export default Header