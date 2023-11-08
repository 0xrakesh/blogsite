import Image from "next/image"

export default async function Trending({title}) {
    const data = await fetch("https://cts-blog-backend.onrender.com/listout", {
    next: { revalidate: 1 } })
    const res = await data.json()
    const imagePath = "https://drive.google.com/uc?export=view&id="
    return (
        <>
            {
                res && <>
                    <h1 className="mx-10 my-5 font-bold text-3xl text-violet-600 underline drop-shadow-lg inline-block">{title}</h1>
                    <div className="flex flex-wrap mb-10 justify-evenly">

                        {res.data.map((data,key) => (
                            <>
                                <a href={`/blog/${data._id}`} key={Math.random()}>
                                    <div className="m-7 drop-shadow-2xl z-10 max-[640px]:mr-auto " key={Math.random()}>
                                            <div className="w-96 rounded-md max-[640px]:w-82  bg-white">
                                                <Image key={Math.random()} src={imagePath+data.thumbnail} width={1024} height={1024} className="rounded-md" alt="Thumbnail of blog" />
                                                <div className="p-3" key={Math.random()}>
                                                    <h1 className="font-semibold text-lg font-josefin">{data.title}</h1>
                                                    <p className="text-black">{data.content}</p>
                                                </div>
                                                <div className="p-5 flex text-lg" key={Math.random()}>
                                                    <p className="font-semibold justify-items-stretch">{data.author}</p>
                                                    <p className="font-semibold ml-auto">{String(new Date(data.publish)).slice(4,10)}</p>
                                                </div>
                                        </div>
                                    </div>
                                </a>  
                            </>
                        ))}
                    </div>
                </>

            }
        </>
    )
}