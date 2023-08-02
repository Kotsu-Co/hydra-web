import { Paper, PaperProps, Stack, useMantineTheme, Text } from "@mantine/core";
export interface MessageProps extends PaperProps {
  fromClient?: boolean;
}
function Message({ fromClient, ...props }: MessageProps) {
  const theme = useMantineTheme();
  return (
    <div className={`w-full flex my-2 ${fromClient ? "justify-end" : null}`}>
      <Stack>
        <Paper
          withBorder
          p="sm"
          radius="lg"
          {...props}
          className="max-w-md"
          style={{
            background: fromClient
              ? theme.colors.blue[9]
              : theme.colors.gray[8],
          }}
        >
          <div className="flex-row items-stretch">
            {props.children}
            <div className="w-full flex">
              <Text className="text-xs text-white justify-items-end">
                {fromClient ? "You" : "Them"}
              </Text>
            </div>
          </div>
        </Paper>
        <Text className="text-xs text-gray-500">
          {fromClient ? "You" : "Them"}
        </Text>
      </Stack>
    </div>
  );
}

export default Message;
