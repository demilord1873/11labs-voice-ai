import React, { useEffect, useState } from "react";

// ElevenLabs
import { useConversation } from "@11labs/react";

// UI
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, MicOff, Volume2, VolumeX } from "lucide-react";

const [hasPermission, setHasPermission] = useState(false);
const [isMuted, setIsMuted] = useState(false);
const [errorMessage, setErrorMessage] = useState("");

const conversation = useConversation({
    onConnect: () => {
      console.log("Connected to Neon");
    },
    onDisconnect: () => {
      console.log("Disconnected from Neon");
    },
    onMessage: (message) => {
      console.log("Received message:", message);
    },
    onError: (error) => {
      setErrorMessage(typeof error === "string" ? error : error.message);
      console.error("Error:", error);
    },
  });

  const { status, isSpeaking } = conversation;

async function startNeon() {
    try {
      // Replace with your actual agent ID or URL
      const conversationId = await conversation.startSession({
        agentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID,
      });
      console.log("Started Neon:", conversationId);
    } catch (error) {
      setErrorMessage("Failed to start Neon");
      console.error("Error starting Neon:", error);
    }
  };

async function endNeon() {
  try {
      await conversation.endSession();
    } catch (error) {
      setErrorMessage("Failed to end Neon");
      console.error("Error ending Neon:", error);
    }
  };

function displayNeon() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
         Neon AI
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMute}
              disabled={status !== "connected"}
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-center">
            {status === "connected" ? (
              <Button
                variant="destructive"
                onClick={handleEndConversation}
                className="w-full"
              >
                <MicOff className="mr-2 h-4 w-4" />
                End Session
              </Button>
            ) : (
              <Button
                onClick={handleStartConversation}
                disabled={!hasPermission}
                className="w-full"
              >
                <Mic className="mr-2 h-4 w-4" />
                Start Session
              </Button>
            )}
          </div>

          <div className="text-center text-sm">
            {status === "connected" && (
              <p className="text-green-600">
                {isSpeaking ? "Neon Is Speaking..." : "Listening..."}
              </p>
            )}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {!hasPermission && (
              <p className="text-yellow-600">
                Please allow microphone access to use Neon.
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
  };

async function requestMicPermission() {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        setHasPermission(true);
      } catch (error) {
        setErrorMessage("Microphone access denied");
        console.error("Error accessing microphone:", error);
      }
  };

async function toggleMute() {
  try {
      await conversation.setVolume({ volume: isMuted ? 1 : 0 });
      setIsMuted(!isMuted);
    } catch (error) {
      setErrorMessage("Failed to change volume");
      console.error("Error changing volume:", error);
    }
};

module.exports = displayNeon;
module.exports = startNeon;
module.exports = endNeon;
module.exports = requestMicPermission;
module.exports = toggleMute;