import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from "react"

interface SeletItemsProps {
    [x: string]: any
    value: string,
    label: string
};

const SeletBox = ({ items }: { items: SeletItemsProps[] }) => {
    return (
        <div className="absolute w-40 children:p-4 bg-white text-black">
            {items.map((item, idx) => (
                <li key={idx} className="hover:bg-darkblue hover:text-white">{item.value}</li>
            ))}
        </div>
    )
}

export default SeletBox