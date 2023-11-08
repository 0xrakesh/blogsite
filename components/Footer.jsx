export default function Footer() {
    return (
        <>
            <div className="bg-black h-32 max-[640px]:h-64 max-[640]:mx-0 -m-4">
                <div className="flex max-[640px]:flex-col gap-y-3 justify-evenly p-6">
                    <h1 className="font-bold font-helvetica text-2xl text-white">BlogWare</h1>
                    <div className="text-white font-md font-montserrat">
                        <ul>
                            <li>Home</li>
                            <li>Following</li>
                            <li>Recent</li>
                        </ul>
                    </div>
                    <div className="text-white font-md font-montserrat">
                        <ul>
                            <li>Github</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}