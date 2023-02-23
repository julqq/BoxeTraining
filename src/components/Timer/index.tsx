'use client';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
const Container = styled.div`
  color: blue;
  background-color: black;
  display: flex;

  justify-content: center;
`;
const Time = styled.div`
  font-size: 64px;
  padding: 20px;
  background-color: White;
`;

const Timer = () => {
  const [sequences, setSequences] = useState(3);
  const [rounds, setRounds] = useState(10);
  const [counter, setCounter] = useState(60);
  useEffect(() => {
    const interval = setTimeout(() => {
      setCounter((prev) => prev - 1);
    }, 10);

    if (counter <= 0) {
      if (sequences <= 0) {
        rounds <= 0 ? clearInterval(interval) : setRounds((prev) => prev - 1);
      }
      if (sequences >= 1) {
        setCounter(60);
        setSequences((prev) => prev - 1);
      }
    }
  }, [counter]);
  return (
    <Container>
      <Time>{counter}</Time>
      <div>
        <h2>rounds: {rounds}</h2>

        <h2>sequences: {sequences}</h2>
      </div>
    </Container>
  );
};

export { Timer };
