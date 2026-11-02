export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 font-mono">
        <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-none animate-spin" />
        <p className="text-xs font-bold uppercase tracking-wider text-zinc-600">
          Loading Technical Documentation...
        </p>
      </div>
    </div>
  );
}
