import { DocContent } from "@/types/docContent";

const Section=({text,title}:DocContent)=>{
    const splitText = text.split("\n")
    return (
        <section className="mb-8">
            {title!==undefined && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
            {splitText.map((t,i)=>(
                <p className="text-slate-600" key={i}>{t}</p>
            ))}
        </section>
    )
}

export default Section;