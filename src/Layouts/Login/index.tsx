import InputField from "../../Component/InputField"

const LoginItems = [
    {
        label:"Email address",
        type:"email",
        require: true
    },
    {
        label:"Enter password",
        type:"password",
        require: true
    }
]

const LOGIN = () => {
    return (
        <div className="w-full" >
            <div className="bg-blend-saturation bg-loginpage w-full bg-no-repeat bg-cover bg-lightblue w-full   pt-20 px-44">
                <div className="flex items-center justify-between pl-2 pb-24 text-body">
                    <div className="text-white-2 font-bold text-3xl">Sign in to your account</div>
                    <div>
                        <img src="img/logo2.png" className="mix-blend-screen" />
                    </div>
                </div>
                <div  className="text-left pb-44">
                    {LoginItems.map((item) => (
                        <InputField item={item}/>
                    ))}                    
                    <div className=" pt-24">
                        <button className="h-[88px] w-full text-white-2 bg-orange font-bold text-2xl text-body rounded-md">LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LOGIN