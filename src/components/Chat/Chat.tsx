'use client';

import {
  Chat,
  Channel,
  ChannelList,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  useCreateChatClient,
} from 'stream-chat-react';
import CreateChannel from "@/components/CreateChannel/CreateChannel";
import 'stream-chat-react/dist/css/v2/index.css';

const CustomChat = ({ apiKey, token, userId }) => {
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: token,
    userData: { id: userId, name: userId },
  });

  if (!client) return <div>Loading...</div>;

  const filters = { members: { $in: [userId] }, type: 'messaging' };
  const options = { presence: true, state: true };

  return (
    <Chat client={client}>
      <ChannelList filters={filters} options={options} />
      <CreateChannel onClose={() => {}} toggleMobile={() => {}} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default CustomChat;
