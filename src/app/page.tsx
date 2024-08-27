import { cookies } from 'next/headers';
import { StreamChat } from 'stream-chat';
import { generateUsername } from "unique-username-generator";
import CustomChat from "@/components/Chat/Chat";

export default async function Home() {
  const apiKey = process.env.STREAM_KEY as string;
  const apiSecret = process.env.STREAM_SECRET as string;
  
  const cookieStore = cookies();
  const userDataValue = cookieStore.get('userData')?.value;
  const userData = userDataValue ? JSON.parse(userDataValue) : undefined;
  const userId = userData?.userId || crypto.randomUUID();
  const username = userData?.username || generateUsername();

  const serverClient = StreamChat.getInstance(apiKey, apiSecret);
  const token = serverClient.createToken(userId);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CustomChat
        apiKey={apiKey}
        userId={userId}
        username={username}
        token={token}
      />
    </main>
  );
}
