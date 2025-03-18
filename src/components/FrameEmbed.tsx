
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Share2, Clipboard, Check } from "lucide-react";

interface FrameEmbedProps {
  message: string;
}

const FrameEmbed = ({ message }: FrameEmbedProps) => {
  const [isSharing, setIsSharing] = useState(false);
  const [copied, setCopied] = useState(false);

  const setIsSharing_ = (value: boolean) => {
    setIsSharing(value);
  };

  const shareToFarcaster = async () => {
    setIsSharing_(true);
    
    try {
      const shareText = `Check out this message from the OM Generator: ${message}`;
      const shareUrl = window.location.origin;
      
      const fullShareUrl = new URL("https://warpcast.com/~/compose");
      fullShareUrl.searchParams.append("text", shareText);
      fullShareUrl.searchParams.append("embeds[]", shareUrl);
      
      window.open(fullShareUrl.toString(), '_blank');
    } catch (error) {
      console.error("Error sharing:", error);
    } finally {
      setIsSharing_(false);
    }
  };
  
  const copyToClipboard = async () => {
    try {
      const clipboardText = `${message} - From the OM Generator: ${window.location.origin}`;
      await navigator.clipboard.writeText(clipboardText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Clipboard error:", error);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 mt-4">
      <Button 
        onClick={shareToFarcaster} 
        className="flex-1 font-serif font-bold text-black bg-purple-200 hover:bg-purple-300"
        disabled={isSharing}
      >
        <Share2 className="mr-2 h-4 w-4" />
        Share to Farcaster
      </Button>
      
      <Button
        onClick={copyToClipboard}
        className="flex-1 font-serif font-bold text-black bg-purple-200 hover:bg-purple-300"
        disabled={copied}
      >
        {copied ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            Copied!
          </>
        ) : (
          <>
            <Clipboard className="mr-2 h-4 w-4" />
            Copy to Clipboard
          </>
        )}
      </Button>
    </div>
  );
};

export default FrameEmbed;
