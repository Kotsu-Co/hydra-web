import { AppShell } from "@mantine/core";
import ChatsList from "./screens/ChatsList.tsx";
import Chat from "./screens/Chat.tsx";

function App() {
  return (
    <AppShell styles={() => ({})} navbar={<ChatsList />}>
      <Chat />
    </AppShell>
  );
}

export default App;
