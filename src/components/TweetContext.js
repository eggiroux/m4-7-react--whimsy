import React, { useContext } from "react";
import moment from "moment";

import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = React.useState(460);
  const [numOfRetweets, setNumOfRetweets] = React.useState(65);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isRetweeted, setIsRetweeted] = React.useState(false);

  const date = moment().format("h:mm A • MMM Do, YYYY");

  const handleToggleLike = () => {
    if (isLiked) {
      setNumOfLikes(numOfLikes - 1);
    } else {
      setNumOfLikes(numOfLikes + 1);
    }
    setIsLiked(!isLiked);
    //console.log("toggled like", numOfLikes);
  };

  const handleToggleRetweet = () => {
    if (isRetweeted) {
      setNumOfRetweets(numOfRetweets - 1);
    } else {
      setNumOfRetweets(numOfRetweets + 1);
    }
    setIsRetweeted(!isRetweeted);
    //console.log("toggled RT", numOfRetweets);
  };

  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        date,
        numOfLikes,
        numOfRetweets,
        setNumOfLikes,
        setNumOfRetweets,
        handleToggleLike,
        handleToggleRetweet,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
