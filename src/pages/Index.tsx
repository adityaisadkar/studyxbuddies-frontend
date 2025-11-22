import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NameInput from "@/components/NameInput";
import ChatInterface from "@/components/ChatInterface";

const Index = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [chatKey, setChatKey] = useState(0);

  const handleNameSubmit = (name: string) => {
    setUserName(name);
  };

  const handleNewChat = () => {
    setChatKey((prev) => prev + 1);
  };

  const handleNewUser = () => {
    setUserName(null);
    setChatKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onNewChat={handleNewChat} onNewUser={handleNewUser} />
      
      <main className="flex-1 py-8">
        {userName ? (
          <ChatInterface key={chatKey} userName={userName} />
        ) : (
          <NameInput onNameSubmit={handleNameSubmit} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
