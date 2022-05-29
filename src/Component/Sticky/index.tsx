interface MSGType  {
    title: string,
    content: string,
    key: string
}

const Sticky = (props: MSGType) => {
return (
    <div className="bg-darkblue w-96 h-96 mx-4 rounded-xl text-white text-left font-bold text-xl leading-6 pl-10 pr-12 pb-11">
        <div className="font-title uppercase pt-48 pb-3.5 pl-0.5 pr-1">{props.title}</div>
        <div className="font-body">{props.content}</div>

    </div>
)
}

export default Sticky