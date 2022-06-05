interface InputType {
    label: string,
    type?: string,
    reg?: string,
    require?: boolean,
    lists?: Array<string>
}

const InputField = ({ item }: { item: InputType }) => {
    return (
        <div>
            {item.type && item.type === "select" ? (
                <div>
                    <label className="text-white-2">{item.label}</label>
                    <br />
                    <select name={item.label} id={item.label} 
                            className="rounded-md px-5 py-3.5 h-[52px] w-full" 
                            required={item.require && item.require ? true : false}
                    >
                        {item.lists?.map((sel, idx) => (
                            <option value={idx}>{sel}</option>
                        ))}                        
                    </select>
                </div>
            ) : (
                <div className="pb-[21px]">
                    <label className="text-white-2">{item.label}</label>
                    <br />
                    <input type={item.type && item.type ? item.type : "text"}
                        placeholder={item.label}
                        className="rounded-md px-5 py-3.5 h-[52px] w-full"
                        pattern={item.reg && item.reg ? item.reg : ""}
                        required={item.require && item.require ? true : false}
                    ></input>
                </div>
            )}
        </div>


    )
}

export default InputField