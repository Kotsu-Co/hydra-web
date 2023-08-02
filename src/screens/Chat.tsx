import { Container, Stack, Text, TextInput } from "@mantine/core";

function Chat() {
  return <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "stretch" }}>
    <header> Header</header>
    <div style={{ height: "90vh", overflowY: "scroll"}}>
      {
        Array.from({ length: 100 }, (_, i) => <div key={i}>Hola</div>)
      }
    </div>
    <div>
      <TextInput/>
    </div>
  </div>;
}

export default Chat;
