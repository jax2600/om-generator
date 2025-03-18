
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { positiveMessages } from "@/data/positiveMessages";
import { useConnect } from 'wagmi';
import FrameEmbed from './FrameEmbed';

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

  return (
    <Card className="p-6 space-y-4 text-center max-w-lg mx-auto border-opacity-30 bg-gray-900">
      <div className="space-y-2">
        <img 
          alt="OM Oracle" 
          className="mx-auto w-72 h-auto rounded-lg shadow-md object-contain" 
          src="/image.png" 
        />
        <h2 className="tracking-tight mt-4 font-serif text-4xl font-semibold text-white">OM Generator</h2>
        <p className="text-muted-foreground font-serif">Let the universe speak to your soul</p>
      </div>
      <p className="text-xl italic py-4 font-serif text-amber-100">{message}</p>
      <Button onClick={handleFrameAction} className="w-full font-serif font-bold text-black bg-purple-200 hover:bg-purple-300">
        <Sparkles className="mr-2 h-4 w-4" />
        Generate New Message
      </Button>
      <FrameEmbed message={message} />
    </Card>
  );
};

export default MessageGenerator;
