interface InputType {
    label: string,
    type?: string,
    reg?: string,
    require?: boolean
}

const InputField = ({ item }: { item: InputType }) => {
    return (
        <div className="pb-[21px]">
            <label className="text-white-2">{item.label}</label>
            <br />
            <input type={item.type && item.type?item.type:"text"} placeholder={item.label} className="rounded-md px-5 py-3.5 h-[52px] w-full" pattern={item.reg && item.reg?item.reg:""} required={item.require && item.require?true:false}></input>
        </div>
    )
}

export default InputField