
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { positiveMessages } from "@/data/positiveMessages";
import { useConnect } from 'wagmi';

const MessageGenerator = () => {
  const [message, setMessage] = useState(positiveMessages[0]);
  const { connect, connectors } = useConnect();

  const generateMessage = () => {
    const randomIndex = Math.floor(Math.random() * positiveMessages.length);
    setMessage(positiveMessages[randomIndex]);
  };

  const handleFrameAction = async () => {
    // Handle Frame action when button is clicked
    generateMessage();
  };

  return (
    <Card className="p-6 space-y-4 text-center max-w-lg mx-auto">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">OM Generator</h2>
        <p className="text-muted-foreground">Let the universe speak to your soul</p>
      </div>
      <p className="text-xl italic py-4">{message}</p>
      <Button onClick={handleFrameAction} className="w-full">
        <Sparkles className="mr-2 h-4 w-4" />
        Generate New Message
      </Button>
    </Card>
  );
};

export default MessageGenerator;
