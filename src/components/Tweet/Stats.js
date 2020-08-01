import React from "react";
import styled from "styled-components";
import { TweetContext } from "../TweetContext";

const Stats = () => {
  const { numOfRetweets, numOfLikes } = React.useContext(TweetContext);
  return (
    <Wrapper>
      <span>
        <strong>{numOfRetweets} </strong> Retweets{" "}
      </span>
      <span>
        <strong>{numOfLikes} </strong>
        Likes
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  color: grey;

  & span:last-child {
    margin-left: 20px;
  }

  & strong {
    color: black;
    font-weight: bold;
  }
`;

export default Stats;
