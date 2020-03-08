import React from "react";

import "./ChatMessage.css";

function SentMessage(props) {
  console.log("aasdasdasdasdas", props);
  return (
    <div className="chat-message-sent">
      <div className="messagebox">
        <div className="message-sent">{props.message.body}</div>
      </div>
    </div>
  );
}
function ReceivedMessage(props) {
  console.log("aasdasdasdasdas", props);
  return (
    <div className="chat-message-received">
      <p>{props.message.user.username}</p>
      <div className="messagebox">
        <img
          className="Avatar"
          src={props.message.user.avatar}
          alt="Seinfield"
        ></img>
        <p className="message-received">{props.message.body}</p>
      </div>
    </div>
  );
}

function ChatMessage(props) {
  console.log("SDASKDJSKDJS", props);
  if (props.messageType === "sent") {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
}

export default ChatMessage;
