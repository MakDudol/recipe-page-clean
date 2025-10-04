import recipe from "./data/recipe.json"
import RecipeHeader from "./components/RecipeHeader.jsx"
import RecipeMeta from "./components/RecipeMeta.jsx"
import Section from "./components/Section.jsx"
import IngredientsList from "./components/IngredientsList.jsx"
import InstructionsList from "./components/InstructionsList.jsx"
import NutritionTable from "./components/NutritionTable.jsx"
import './App.css'

function App() {
  return (
    <>
     <h1 className="text-red-500">Hello</h1>
    <main className="min-h-dvh bg-base-50 py-10 px-4">
      <article className="mx-auto max-w-[736px] rounded-card bg-base-100 shadow-card p-6 md:p-10 text-left">
    <RecipeHeader recipe={recipe} />
    <RecipeMeta recipe={recipe} />
    <Section title="Ingredients">
      <IngredientsList items={recipe.ingredients} />
    </Section>
    <Section title="Instructions"> 
     <InstructionsList steps={recipe.instructions} />
    </Section>
    <Section title="Nutrition" divider={false}>
      <p className="text-text-secondary mb-4">
    The table below shows nutritional values per serving without the additional fillings.
      </p>
  <NutritionTable nutrition={recipe.nutrition} />
    </Section>
  </article>

    </main>
    </>
  )
}

export default App
