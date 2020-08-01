import React, { useContext } from "react";
import moment from "moment";

import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const date = moment().format("h:mm A • MMM Do, YYYY");

  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: false,
        isLikedByCurrentUser: false,
        date,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
