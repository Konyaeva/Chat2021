import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const useBotAnswer = (messages, sendMessage) => {
  const { roomId } = useParams();

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];

    if (messages.length && lastMessage.author === "User") {
      setTimeout(() => {
        sendMessage("Bot", "Hello from bot");
      }, 500);
    }
  }, [messages, sendMessage, roomId]);
};
