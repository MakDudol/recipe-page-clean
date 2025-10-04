export default function RecipeHeader({ recipe }) {
    return (
        <header>
            <figure className="overflow-hidden rounded-xl mb-6 md:mb-8">
        <img src="/images/top-image.png" alt="Simple Omelette Recipe" className="w-full object-cover"  /> 
      </figure>
      <h1 className="font-heading text-[32px] md:text-[40px] text-stone-900">
        {recipe.title}
      </h1>
      <p className="mt-3 text-text-secondary">
        {recipe.description}
      </p>
        </header>
    )
}