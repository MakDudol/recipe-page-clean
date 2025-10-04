export default function RecipeMeta({ recipe }) {
  return (
    <section aria-labelledby="prep" className="mt-6">
      <div className="rounded-xl bg-base-200 p-5">
        <h2 id="prep" className="font-body font-semibold text-rose-800 mb-2 text-xl">
          Preparation time
        </h2>
        <ul className="list-disc pl-6 marker:text-accent-bullet space-y-1">
          <li>
            <span className="font-semibold">Total:</span>{" "}
            Approximately <time dateTime={`PT${recipe.times.total}M`}>{recipe.times.total} minutes</time>
          </li>
          <li>
            <span className="font-semibold">Preparation:</span>{" "}
            <time dateTime={`PT${recipe.times.prep}M`}>{recipe.times.prep} minutes</time>
          </li>
          <li>
            <span className="font-semibold">Cooking:</span>{" "}
            <time dateTime={`PT${recipe.times.cook}M`}>{recipe.times.cook} minutes</time>
          </li>
        </ul>
      </div>
    </section>
  )
}