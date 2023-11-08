'use client'
import { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/navigation';

export default function Create() {
    const [type,setType] = useState('')
    const [token,setToken] = useState('')
    const router = useRouter()

    useEffect(() => {
        setType(localStorage.getItem("type"))
        setToken(localStorage.getItem("token"))
        
    },[])
    useEffect(() => {
        if(token === undefined) {
            router.replace("/login")
        }

        if(type === 'user') 
            router.replace("/")
    },[type,token])

    const [selectedImage, setSelectedImage] = useState(null);
    const [content, setContent] = useState(`In this comprehensive exploration of the Internet of Things (IoT), we delve into the transformative power of interconnected devices. Discover how IoT is revolutionizing industries, enhancing convenience in our daily lives, and paving the way for a smarter, more connected world. From smart homes to industrial automation, uncover the technology behind this global phenomenon.


    As we embark on this journey through the Internet of Things (IoT), we'll not only scratch the surface but dive deep into the very heart of this technological revolution. IoT is more than just a buzzword; it's a fundamental shift that's reshaping the way we live, work, and conduct business.
    
    
    Imagine a world where your morning routine is seamlessly integrated with your home. Your alarm clock wakes you up at the optimal time, your coffee maker starts brewing your favorite brew, and your thermostat adjusts to the perfect temperature, all before you step out of bed. This is just one snapshot of the convenience IoT brings to our daily lives.
    
    
    But the impact of IoT goes far beyond our homes. Industries are being reinvented through the data and insights collected from a myriad of interconnected devices. In agriculture, IoT sensors optimize crop yields and reduce resource wastage.
    
    
    Healthcare benefits from wearable devices that monitor vital signs, sending real-time information to healthcare providers. In transportation, IoT ensures smoother traffic flow and safer driving with connected vehicles.`)
    const [title,setTitle] = useState('Blockchain Technology')
    const [description, setDescription] = useState('A Web3 Application by using blockchain technology.')
    const [imagePreview,setImagePreview] = useState('/image.png')

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setSelectedImage(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    };

    const handleTextareaChange = (e) => {
        console.log(e.target.value === content)
        e.target.value === content ? setContent((prev) => prev + "\n") : setContent(e.target.value)
      };

    const publish = () => {
        const jsonData = {
            userid: "123",
            title: title,
            content: content,
            
        }
    }

  
    const handleImageUpload = () => {

      const formData = new FormData();
      formData.append('image', selectedImage);

      setSelectedImage(null);
    };
    return (
        <>
            <div className='m-10'>
                <div className='flex gap-14 bg-white p-4 rounded-md drop-shadow-2xl'>
                    <p className='text-black text-lg font-semibold'>Enter the title</p>
                    <input type='text' className='bg-violet-100 rounded border-2 w-96 px-2 placeholder:text-black-200' placeholder={title} onChange={(e) => {
                        if(e.target.value === '') {
                            setTitle('Blockchain Technology')
                        }
                        else
                            setTitle(e.target.value)
                    }} />

                    <p className='text-black text-lg font-semibold'>Upload the thumbnail image</p>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </div>
                <div className='flex gap-5 mb-24 bg-white p-4 rounded-md drop-shadow-2xl'>
                    <p className='text-black text-lg font-semibold'>Enter the description</p>
                    <input type='text' className='bg-violet-100 rounded border-2 w-screen px-2 placeholder:text-black-200 focus:border-1' placeholder={description} onChange={(e) => {
                        if(e.target.value === '') 
                            setDescription('A Web3 Application by using blockchain technology.')
                        else
                            setDescription(e.target.value)
                    }}/>
                </div>
            </div>

            <div className='mx-10 mb-10 -mt-14'>
                <div className='flex gap-14 justify-items-center	flex-nowrap bg-white p-4 rounded-md drop-shadow-2xl'>
                    <div className='w-2/4'>
                        <p className='bg-[#fb923c] px-4 py-2 font-bold inline-block rounded-md text-white'>Preview</p>
                        <p className='text-black font-bold'>{title}</p>
                        <p className="text-black font-semibold">{description}</p>
                        {imagePreview && <img src={imagePreview} className='justify-items-center my-4' alt="Preview" width="500" />}
                        <p className='text-black'>{content}</p>
                    </div>
                    <div className='w-2/4'>
                        <p className='bg-[#5b21b6] px-4 py-2 font-bold inline-block rounded-md text-white'>Editor</p>
                        <p className='text-black text-lg font-semibold'>Enter the content</p>
                        <textarea type='text' className='bg-violet-100 my-3 text-black rounded border-2 w-full h-96 max-h-auto px-2 placeholder:text-black-200 focus:border-1' placeholder={content} onChange={handleTextareaChange}/>
                        <button className='bg-[#4f46e5] text-white px-8 py-5 mx-[38%] rounded-md' onClick={() => publish()}>Publish →</button>
                    </div>
                </div>
            </div>
        </>
    )
}