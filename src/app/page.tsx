import { StreamChat } from 'stream-chat';
import { username } from 'username';
import CustomChat from "@/components/Chat/Chat";

export default async function Home() {
  const api_key = process.env.STREAM_KEY as string;
  const api_secret = process.env.STREAM_SECRET as string;
  const user_id = await username() as string;

  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const token = serverClient.createToken(user_id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CustomChat
        apiKey={api_key}
        userId={user_id}
        token={token}
      />
    </main>
  );
}
