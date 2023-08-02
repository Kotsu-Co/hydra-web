import { TextInput } from "@mantine/core";
import Message from "../components/Message";
import { lorem } from "../testdata";

function Chat() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "stretch",
      }}
    >
      <header> Header</header>
      <div style={{ height: "90vh", overflowY: "scroll" }}>
        {Array.from({ length: 100 }, (_, i) => (
          <Message key={i} fromClient={!!(i % 2)}>
            {lorem}
          </Message>
        ))}
      </div>
      <div>
        <TextInput />
      </div>
    </div>
  );
}

export default Chat;
