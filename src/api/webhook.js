
import { positiveMessages } from "../data/positiveMessages";

// This file would be served at /api/webhook in a production environment

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Process the Frame interaction
      const messageIndex = Math.floor(Math.random() * positiveMessages.length);
      const message = positiveMessages[messageIndex];
      
      // Return a Frame response
      return {
        status: 200,
        body: JSON.stringify({
          frames: {
            version: "vNext",
            image: "https://om-generator.lovable.app/image.png",
            buttons: [
              {
                label: "Generate New Message",
                action: "post"
              },
              {
                label: "Share to Farcaster",
                action: "link",
                target: "https://warpcast.com/~/compose?text=" + encodeURIComponent(`Check out this message from the OM Generator: ${message} by @jacque`) + "&embeds[]=https://om-generator.lovable.app"
              }
            ],
            title: "OM Generator",
            ogTitle: "OM Generator - Spiritual Messages",
            ogDescription: message + " by @jacque"
          }
        })
      };
    } catch (error) {
      console.error('Error handling webhook:', error);
      return { status: 500, body: 'Error processing frame interaction' };
    }
  } else {
    return { status: 405, body: 'Method not allowed' };
  }
}
