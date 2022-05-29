interface PropsInvestlist {
    type: string,
    range_min: string,
    range_max: string,
    rate: number,
    duration: number,
    content: string
}

const InvestCard = ({ item }: { item: PropsInvestlist }) => {

    return (
        <div className="rounded-md shadow-box w-96 text-4xl pb-10">
            <div className="font-bold">
                {item.type}
            </div>
            <div className="bg-darkblue pt-4 pb-6 text-white mb-7 font-title">
                ${item.range_min} - ${item.range_max}
            </div>
            <div className="font-normal mb-7 leading-10  font-title">
                {item.rate}% interest
            </div>
            <div className="mb-7 font-title">
                After {item.duration}h
            </div>
            <div className="text-darkblue text-2xl font-title mb-7">
                {item.content}
            </div>
            <div className="">
                <button className="w-3/4 text-lightblue uppercase font-title px-20 py-6 border border-lightblue rounded shadow-box">invest</button>
            </div>


        </div>
    )

}

export default InvestCard