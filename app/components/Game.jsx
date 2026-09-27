'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

import benar1 from '@/assets/meme/benar1.jpeg';
import benar2 from '@/assets/meme/benar2.jpeg';
import benar3 from '@/assets/meme/benar3.jpeg';
import benar4 from '@/assets/meme/benar4.jpeg';
import benar5 from '@/assets/meme/benar5.jpeg';
import benar6 from '@/assets/meme/benar6.jpeg';
import salah1 from '@/assets/meme/salah1.jpeg';
import salah2 from '@/assets/meme/salah2.jpeg';
import salah3 from '@/assets/meme/salah3.jpeg';
import salah4 from '@/assets/meme/salah4.jpeg';
import salah5 from '@/assets/meme/salah5.jpeg';
import salah6 from '@/assets/meme/salah6.jpeg';

const correctImages = [benar1, benar2, benar3, benar4, benar5, benar6];
const incorrectImages = [salah1, salah2, salah3, salah4, salah5, salah6];

const Game = () => {
    const questions = [
        { id: 1, text: 'Siapa yang duluan lahir, Farand atau Farrel?', answer: 'farrel' },
        { id: 2, text: 'Nama lengkap Abang?', answer: 'muhammad fahish haritsah bimo' },
        { id: 3, text: 'Berapa kali Iyo mokel Ramadhan ini?', answer: '3' },
        { id: 4, text: 'Hari apa Inesh lahir?', answer: 'senin' },
        { id: 5, text: 'Jumlah kaki cucu-cucu Uwo Haji x (sin²(alpha) + cos²(alpha))?', answer: '18' },

    ];

    const [currentQuestion, setCurrentQuestion] = useState(
        () => questions[Math.floor(Math.random() * questions.length)]
    );
    const [inputValue, setInputValue] = useState('');
    const [wrongAttempts, setWrongAttempts] = useState(0);
    const [feedbackImage, setFeedbackImage] = useState(null);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);
    const [isAnswering, setIsAnswering] = useState(false);
    const [showPrizeLink, setShowPrizeLink] = useState(false);

    const getRandomImage = (imageArray) => {
        const randomIndex = Math.floor(Math.random() * imageArray.length);
        return imageArray[randomIndex];
    };

    const shuffleQuestion = () => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setCurrentQuestion(questions[randomIndex]);
        setInputValue('');
        setShowFeedback(false);
        setFeedbackMessage('');
        setFeedbackImage(null);
        setIsAnswering(false);
        setShowPrizeLink(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const isCorrect = inputValue.toLowerCase().trim() === currentQuestion.answer.toLowerCase();

        if (isCorrect) {
            setFeedbackImage(getRandomImage(correctImages));
            setFeedbackMessage('✨ Benar! Selamat!');
            setShowFeedback(true);
            setIsAnswering(true);
            setShowPrizeLink(true);
        } else {
            const newWrongAttempts = wrongAttempts + 1;
            setWrongAttempts(newWrongAttempts);
            setFeedbackImage(getRandomImage(incorrectImages));
            setShowPrizeLink(false);

            if (newWrongAttempts >= 3) {
                setFeedbackMessage('🎉 Prank! Boleh coba berkali-kali kok!');
                setWrongAttempts(0);
            } else {
                setFeedbackMessage(`❌ Salah! Sisa percobaan: ${3 - newWrongAttempts}`);
            }

            setShowFeedback(true);
            setIsAnswering(true);
        }
    };

    const handleNextQuestion = () => {
        shuffleQuestion();
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !isAnswering) {
            handleSubmit(e);
        }
    };

    if (!currentQuestion) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <div className='text-2xl font-lora'>Loading...</div>
            </div>
        );
    }

    return (
        <div className='w-full min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-darkTheme dark:to-darkHover px-4 py-16 md:py-24'>
            <div className='w-11/12 max-w-4xl mx-auto'>
                {/* Header */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='text-center mb-12'
                >
                    <p className='text-base md:text-lg font-lora text-gray-600 dark:text-white/70 mb-2'>
                        Interactive Challenge
                    </p>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-lora font-bold mb-4'>
                        Trivia <span className='underline decoration-blue-500'>Game</span>
                    </h1>
                    <p className='text-gray-600 dark:text-white/80 max-w-2xl mx-auto font-lora'>
                        Jawab pertanyaan dengan satu kata. Jangan ngasal atau sisa percobaan bakal berkurang!
                    </p>
                </motion.div>

                {/* Main Game Container */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='bg-white dark:bg-darkHover/30 border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-lg'
                >
                    {/* Question Section */}
                    <div className='mb-8'>
                        <div className='flex items-center justify-between mb-6'>
                            <h2 className='text-2xl md:text-3xl font-lora font-bold text-gray-900 dark:text-white'>
                                {currentQuestion.text}
                            </h2>
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 180 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleNextQuestion}
                                className='p-3 rounded-full border border-gray-300 dark:border-white/20 hover:bg-lightHover dark:hover:bg-darkHover duration-300 transition-colors'
                                title='Refresh question'
                            >
                                <svg
                                    className='w-6 h-6'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                                    />
                                </svg>
                            </motion.button>
                        </div>

                        {/* Input Section */}
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <motion.input
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                type='text'
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder='Ketik jawaban mu di sini...'
                                disabled={isAnswering}
                                className='w-full px-6 py-4 border-2 border-gray-300 dark:border-white/20 rounded-xl focus:outline-none focus:border-blue-500 dark:bg-darkTheme/50 dark:text-white dark:placeholder-white/50 text-lg disabled:opacity-50 disabled:cursor-not-allowed duration-300 transition-colors'
                            />

                            <motion.button
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                                whileHover={!isAnswering ? { scale: 1.05 } : {}}
                                whileTap={!isAnswering ? { scale: 0.95 } : {}}
                                type='submit'
                                disabled={isAnswering || !inputValue.trim()}
                                className='w-full px-6 py-3 border border-white bg-black hover:bg-black/80 text-white rounded-full font-semibold flex items-center justify-center gap-2 dark:bg-transparent dark:border-white/30 dark:hover:bg-darkHover duration-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                Cek Jawaban
                                <svg
                                    className='w-4 h-4'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M9 5l7 7-7 7'
                                    />
                                </svg>
                            </motion.button>
                        </form>
                    </div>

                    {/* Attempts Indicator */}
                    <div className='mt-8 pt-8 border-t border-gray-200 dark:border-white/10'>
                        <div className='flex items-center justify-between gap-4'>
                            <span className='text-gray-600 dark:text-white/70 font-lora'>
                                Kesalahan: {wrongAttempts}/3
                            </span>
                            <div className='flex gap-2'>
                                {[0, 1, 2].map((index) => (
                                    <motion.div
                                        key={index}
                                        animate={{
                                            backgroundColor:
                                                index < wrongAttempts
                                                    ? '#ef4444'
                                                    : '#e5e7eb',
                                            darkness: index < wrongAttempts ? 1 : 0.5,
                                        }}
                                        className='w-8 h-8 rounded-full dark:bg-white/20'
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Feedback Section */}
                {showFeedback && (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                        className='mt-12'
                    >
                        <div className='bg-white dark:bg-darkHover/30 border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-lg'>
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className='mb-6 flex justify-center'
                            >
                                <div className='w-fit max-w-full rounded-2xl overflow-hidden shadow-lg'>
                                    <Image
                                        src={feedbackImage}
                                        alt='feedback'
                                        width={480}
                                        height={360}
                                        className='w-auto h-auto max-w-full max-h-[360px] md:max-h-[420px] object-contain'
                                        unoptimized
                                    />
                                </div>
                            </motion.div>

                            {showPrizeLink && (
                                <motion.div
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className='text-center mb-6'
                                >
                                    <a
                                        href='https://app.gopay.co.id/NF8p/hxjy1dmh'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='inline-flex items-center gap-2 border-b-2 border-blue-500 px-6 py-2 text-base font-semibold text-blue-700 transition-colors duration-300 hover:border-blue-600 hover:text-blue-800 dark:border-blue-300 dark:text-blue-300 dark:hover:border-blue-200 dark:hover:text-blue-200 md:text-lg'
                                    >
                                        🎁 Nih hadiah buat kamu. Klik!
                                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' />
                                        </svg>
                                    </a>
                                </motion.div>
                            )}

                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className='text-center'
                            >
                                <p className='text-xl md:text-3xl font-lora font-bold mb-6 text-gray-900 dark:text-white'>
                                    {feedbackMessage}
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleNextQuestion}
                                    className='px-10 py-3 border border-white bg-black hover:bg-black/80 text-white rounded-full font-semibold flex items-center justify-center gap-2 mx-auto dark:bg-transparent dark:border-white/30 dark:hover:bg-darkHover duration-300 transition-all'
                                >
                                    Pertanyaan Berikutnya
                                    <svg
                                        className='w-4 h-4'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M9 5l7 7-7 7'
                                        />
                                    </svg>
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Game;
