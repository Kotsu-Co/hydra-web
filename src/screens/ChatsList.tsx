import ChatListItem from "../components/ChatListItem.tsx";
import {Navbar, Text} from "@mantine/core";

function ChatsList() {


  return (
    <Navbar width={{ base: 300}}>
      <Text style={{ marginLeft: "1em", marginTop: "0.5em" }} size={"1.5em"} weight={700}>
        Chats
      </Text>
      <div style={{
        overflowY: "scroll",
      }}>

      {
        Array.from({ length: 100 }).map((_, index) => (
          <ChatListItem key={index} image={""} name={"Alberto"} lastMessage={"Hola, como estas?"} unread={3} />
        ))
      }
      </div>
    </Navbar>
  )
}

export default ChatsList;