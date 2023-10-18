//import React from "react";
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";
const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "9dbcd845-72ee-4a1b-8534-2de5418c3187",
    // eslint-disable-next-line react/prop-types
    props.user.username,
    // eslint-disable-next-line react/prop-types
    props.user.secret
  );

  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100vh" }} />
    </div>
  );
};

export default ChatsPage;
