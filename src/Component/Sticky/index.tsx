interface MSGType  {
    title: string,
    content: string,
    key: string
}

const Sticky = (message: MSGType) => {
return (
    <div className="bg-darkblue w-96 h-96 mx-4 rounded-xl text-white text-left font-bold text-xl leading-6 ">
        <div className="font-title">{message.title}</div>
        <div className="font-body ">{message.content}</div>

    </div>
)
}

export default Sticky