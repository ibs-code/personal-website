export default function Photography() {
  const placeholders = Array.from({ length: 9 }, (_, i) => i);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-stone-900">Photography</h1>
        <p className="text-sm text-stone-500 mt-1">Images from the road.</p>
      </div>

      <hr className="border-stone-200" />

      <div className="grid grid-cols-3 gap-3">
        {placeholders.map((i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-stone-200 hover:bg-stone-300 transition-colors"
          />
        ))}
      </div>
    </div>
  );
}
