import { StreamChat } from 'stream-chat';
import CustomChat from "@/components/Chat/Chat";

export default function Home() {
  const api_key = process.env.STREAM_KEY;
  const api_secret = process.env.STREAM_SECRET;
  const user_id = process.env.STREAM_USER_ID;

  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const token = serverClient.createToken(user_id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CustomChat
        apiKey={process.env.STREAM_KEY}
        userId={process.env.STREAM_USER_ID}
        token={token}
      />
    </main>
  );
}
