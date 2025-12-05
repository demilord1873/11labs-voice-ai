import VoiceComponent from "./VoiceComponent";

export default function Neon() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden border-red-600">
      <div className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-[100px] animate-pulse" />

      <small className="text-sm text-gray-500">Powered by DemLabs</small>
      <h1 className="text-4xl font-bold mb-6">Neon Intelligence</h1>
      <VoiceComponent />
      <small className="text-xs text-gray-500 my-6">
        This feature requires microphone access to work.
      </small>
    </main>
  );
}
