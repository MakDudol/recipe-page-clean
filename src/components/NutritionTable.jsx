export default function NutritionTable({ nutrition }) {
  return (
    <div className="divide-y divide-line">
      {nutrition.map((row) => (
        <div key={row.label} className="flex items-center justify-between py-4 px-6">
          <div className="text-text-secondary">{row.label}</div>
          <div className="text-right font-semibold text-accent-heading pr-60">
            {row.value}
          </div>
        </div>
      ))}
    </div>
  );
}