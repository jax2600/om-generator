import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { positiveMessages } from "@/data/positiveMessages";
import { useConnect } from 'wagmi';
const MessageGenerator = () => {
  const [message, setMessage] = useState(positiveMessages[0]);
  const {
    connect,
    connectors
  } = useConnect();
  const generateMessage = () => {
    const randomIndex = Math.floor(Math.random() * positiveMessages.length);
    setMessage(positiveMessages[randomIndex]);
  };
  const handleFrameAction = async () => {
    // Handle Frame action when button is clicked
    generateMessage();
  };
  return <Card className="p-6 space-y-4 text-center max-w-lg mx-auto border-opacity-30">
      <div className="space-y-2">
        <img alt="OM Oracle" className="mx-auto w-72 h-auto rounded-lg shadow-md object-contain" src="/lovable-uploads/204c5364-1337-4b94-a2a3-deccae254f19.jpg" />
        <h2 className="tracking-tight mt-4 font-serif text-4xl font-semibold">OM Generator</h2>
        <p className="text-muted-foreground font-serif">Let the universe speak to your soul</p>
      </div>
      <p className="text-xl italic py-4 font-serif">{message}</p>
      <Button onClick={handleFrameAction} className="w-full font-serif">
        <Sparkles className="mr-2 h-4 w-4" />
        Generate New Message
      </Button>
    </Card>;
};
export default MessageGenerator;