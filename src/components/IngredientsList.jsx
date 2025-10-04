export default function IngredientsList({ items }) {
    return (<ul className="list-disc pl-6 marker:text-accent-heading space-y-2">
        {items.map((item, index) => (
            <li key={index} className="text-stone-600">
                {item}
            </li>
        ))}
    </ul>
    )
}