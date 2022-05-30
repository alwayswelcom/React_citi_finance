import InputField from "../../Component/InputField"

const RegisterItems = [
    {
        label: "Your full name"
    },
    {
        label: "Email address",
        type: "email"
    },
    {
        label: "Phone number",
        type: "tel",
        reg: "[0-9]{3}-[0-9]{2}-[0-9]{3}"
    },
    {
        label: "Country",
        type: "select",
        lists: [
            "US", "UK"
        ]
    },
    {
        label: "Enter password",
        type: "password"
    },
    {
        label: "Confirm your password",
        type: "password"
    }
]
const REGISTER = () => {
    return (
        <div className="w-full" >
            <div className="bg-blend-saturation bg-loginpage w-full bg-no-repeat bg-cover bg-lightblue w-full   pt-20 px-44">
                <div className="flex items-center justify-between pl-2 pb-24 text-body">
                    <div className="text-white-2 font-bold text-3xl">Sign in to your account</div>
                    <div>
                        <img src="img/logo2.png" className="mix-blend-screen" />
                    </div>
                </div>
                <div className="text-left pb-80">
                    {RegisterItems.map((item) => (
                        <InputField item={item} />
                    ))}
                    <div className=" pt-28">
                        <button className="h-[88px] w-full text-white-2 bg-orange font-bold text-2xl text-body rounded-md uppercase">Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default REGISTER