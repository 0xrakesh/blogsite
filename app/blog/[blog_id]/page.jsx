export default async function Blog({params}) {
    const id = params.blog_id;
    const url = `https://cts-blog-backend.onrender.com/blog/${id}`
    const imagePath = "https://drive.google.com/uc?export=view&id="
    const data = await fetch(url, {
    next: { revalidate: 1 } })
    const res = await data.json()
    const blog = res.blog;
    return (
        <> 
            <div 
                className='flex justify-center min-[640px]:h-32 -mx-4 max-[640px]:-mr-10 flex-wrap gap-y-2 gap-72 p-6 h-full my-5 bg-violet-900 text-white'>
                <div className='titles'>
                    <h1 className='font-bold font-montserrat text-2xl'>{blog.title}</h1>
                    <p>{blog.content}</p>
                </div>
                <div className='author'>
                    <h1 className='text-xl font-semibold font-montserrat'>0xrakesh</h1>
                    <p>May 03</p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-5 flex-col'>
                <img
                    src={imagePath+blog.thumbnail}
                    className='rounded-lg justify-end -translate-y-10 laptop:translate-y-28 max-[640px]:translate-y-0 max-[640px]:p-6 max-[640px]:rounded-lg'
                    width={978}
                    height={978}
                />
                <div className='text-center text-lg mb-10 ml-20 mr-20 mt-0 font-montserrat font-medium max-[640px]:ml-5 max-[640px]:mr-5'>
                    <p className="text-black font-medium mx-32 my-10 max-[640px]:mx-2" dangerouslySetInnerHTML={{ __html: blog.paragraph }} />
                </div>
            </div>
        </>
    )
}