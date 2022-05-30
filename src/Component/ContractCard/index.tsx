interface PropsContractlist {
    type: string,
    range_min: number,
    range_max: string,
    rate: number,
    content_1: string,
    method: string,
    bots: string,
    content_2: string
}

const ContractCard = ({ item }: { item: PropsContractlist }) => {

    return (
        <div className="rounded-md shadow-box w-96 text-4xl py-10 mt-10">
            <div className="font-bold py-6">
                {item.type}
            </div>
            <div className="bg-darkblue pt-4 pb-6 text-white mb-7 font-title">
                ${item.range_min} - ${item.range_max}
            </div>
            <div className="font-normal mb-7 leading-10 font-title text-darkblue pb-7 text-3xl">
                {item.rate}% weekly interest
            </div>
            <div className="text-2xl pt-0.5 pb-10 font-title w-80 text-center">
                {item.content_1}
            </div>
            <div className="text-2xl text-darkblue pb-7 font-title">
                Trading method:
                <br />
                {item.method}
            </div>
            <div className="text-2xl pt-0.5 pb-8 font-title">
                Bots: {item.bots}
            </div>            
            <div className="text-darkblue text-2xl font-title mb-7">
                {item.content_2}
            </div>
            <div className="">
                <button className="w-3/4 text-lightblue uppercase font-title px-20 py-6 border border-lightblue rounded shadow-box">invest</button>
            </div>


        </div>
    )

}

export default ContractCard