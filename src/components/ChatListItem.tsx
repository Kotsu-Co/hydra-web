import {
  UnstyledButton,
  UnstyledButtonProps,
  Group,
  Avatar,
  Text,
  createStyles, Stack, Badge, Center,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  user: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    borderRadius: "5%",

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));

interface UserButtonProps extends UnstyledButtonProps {
  image: string;
  name: string;
  lastMessage: string;
  unread: string;
}

export default function ChatListItem({image, name, lastMessage, unread, ...others}: UserButtonProps) {
  const {classes} = useStyles();

  return (
    <UnstyledButton className={classes.user} {...others}>
      <Group>
        <Avatar src={image} radius="xl" size={"3.5em"}/>

        <div style={{flex: 1}}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {lastMessage}
          </Text>
        </div>

        <Stack>
          <Text>8:50</Text>
          <Center>
            <Badge variant={"filled"} color={"green"} radius={"xl"} w={20} h={20} p={0}>
              {unread}
            </Badge>
          </Center>
        </Stack>
      </Group>
    </UnstyledButton>
  );
}