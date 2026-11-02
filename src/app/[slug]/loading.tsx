export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FBFBFA]">
      <div className="flex flex-col items-center gap-3 font-mono">
        <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-none animate-spin" />
        <p className="text-xs font-bold uppercase tracking-wider text-zinc-600">
          Redirecting to Documentation...
        </p>
      </div>
    </div>
  );
}
