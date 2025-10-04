export default function Section({ title, children, divider = true, className = "" }) {
  return (
    <section className={`mt-8 md:mt-10 ${className}`}>
      <h2 className="font-heading text-2xl md:text-[28px] text-accent-heading mb-3">
        {title}
      </h2>

      {children}

      {divider && <div className="border-t border-line mt-6" />}
    </section>
  )
}