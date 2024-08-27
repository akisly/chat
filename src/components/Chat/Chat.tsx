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
import { useEffect } from "react";
import { create } from "@/app/actions";

const CustomChat = ({ apiKey, token, userId, username }: { apiKey: string, token: string, userId: string, username?: string }) => {
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: token,
    userData: { id: userId, name: username },
  });

  useEffect(() => {
    create(JSON.stringify({ userId, username }));
  }, [])

  if (!client) return <div>Loading...</div>;

  const filters = { members: { $in: [userId] }, type: 'messaging' };
  const options = { presence: true, state: true };

  return (
    <Chat client={client}>
      <div>{client.user?.name}</div>
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
