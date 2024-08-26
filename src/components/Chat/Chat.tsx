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
import 'stream-chat-react/dist/css/v2/index.css';

const apiKey = 'r6578ydqv5ud';
const userId = 'test';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidGVzdCJ9.QqC00TkTnfTQDjf-h6WmsQ9-qgJt2xJuT1Acodh5Fw8';

const filters = { members: { $in: [userId] }, type: 'messaging' };
const options = { presence: true, state: true };
const sort = { last_message_at: -1 };

const CustomChat = () => {
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: token,
    userData: { id: userId },
  });
  
  if (!client) return <div>Loading...</div>;
  
  const channel = client.channel('messaging', 'travel', {
    name: 'Awesome channel about traveling',
  });

  return (
    <Chat client={client}>
      <ChannelList sort={sort} filters={filters} options={options} />
      <Channel channel={channel}>
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
