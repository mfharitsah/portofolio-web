import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {

    const [result, setResult] = useState("");
    const [sendValid, setSendValid] = useState(true);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        // Validasi input
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        if (!name || !email || !message) {
            setResult("Please fill out all fields!");
            setSendValid(false);
            return;
        }

        setSendValid(true);

        formData.append("access_key", "775fd097-4dad-4c65-a801-1977edfb52a3");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='w-full bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center dark:bg-none bg-[length:90%_auto] px-[15%] flex flex-col justify-center items-center gap-5 py-10 scroll-mt-24 lg:scroll-mt-40' id='contact'>
            <div className='w-full flex flex-col items-center text-center'>
                <p className='text-center mb-2 text-lg lg:text-xl font-lora'>Connect with me</p>
                <p className='text-center text-4xl lg:text-5xl font-lora'>Get In Touch</p>
                <p className='font-lora text-justify w-full lg:w-1/2 lg:text-center text-gray-600 mt-3 dark:text-white/80'>I'd like to hear from you!If you have any questions, comments, or feedback, please tell me through the form below.</p>
            </div>

            <form onSubmit={onSubmit} action="" className='w-full flex flex-col items-center gap-8 mt-10'>
                <div className='flex flex-col md:flex-row justify-between w-full lg:w-3/4 gap-5'>
                    <input type="text" className='w-full md:w-1/2 border-[0.5px] border-gray-400 rounded-md px-2 py-4 dark:bg-darkHover/30 dark:border-white/90' placeholder='Enter your name' name='name' />
                    <input type="text" className='w-full md:w-1/2 border-[0.5px] border-gray-400 rounded-lg px-2 py-3 dark:bg-darkHover/30 dark:border-white/90' placeholder='Enter your email' name='email' />
                </div>
                <textarea type="text" rows={7} className='w-full lg:w-3/4 border-[0.5px] border-gray-400 rounded-lg px-2 py-4 dark:bg-darkHover/30 dark:border-white/90' placeholder='Enter your message' name='message' />

                <button type='submit' className='px-10 py-3 border rounded-full border-white bg-black hover:bg-black/80 text-white flex items-center gap-2 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover duration-300'>
                    Submit now
                    <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </button>
                <p className={`italic text-gray-600 ${!sendValid && 'text-red-600'}`}>{result}</p>
            </form>

        </div>
    )
}

export default Contact
