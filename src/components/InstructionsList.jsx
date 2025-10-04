export default function InstructionsList ({ steps }) {
    return(
        <ol className="list-decimal pl-6 space-y-3 marker:text-accent-heading marker:font-semibold ">
            {steps.map((step, index) => (
                <li key={index} className="pl-4 leading-relaxed">
                    <span className="font-semibold text-stone-600">{step.title}:</span> {step.desc}
                </li>
            ))}
        </ol>
    )
}