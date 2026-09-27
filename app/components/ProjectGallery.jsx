'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProjectGallery = ({ images, projectTitle }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowRight') {
        setSelectedIndex((current) => (current + 1) % images.length);
      }
      if (event.key === 'ArrowLeft') {
        setSelectedIndex(
          (current) => (current - 1 + images.length) % images.length,
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [images.length, selectedIndex]);

  if (!images.length) return null;

  const showPrevious = () =>
    setSelectedIndex(
      (current) => (current - 1 + images.length) % images.length,
    );
  const showNext = () =>
    setSelectedIndex((current) => (current + 1) % images.length);

  return (
    <>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={`group relative overflow-hidden rounded-2xl border border-blue-100 bg-navy-950 text-left shadow-sm dark:border-blue-300/10 ${
              index % 5 === 0 ? 'aspect-[16/9] md:col-span-2' : 'aspect-[4/3]'
            }`}
            aria-label={`Open ${projectTitle} image ${index + 1}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={
                index % 5 === 0
                  ? '(max-width: 1024px) 100vw, 960px'
                  : '(max-width: 768px) 100vw, 50vw'
              }
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
            />
            <span className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full bg-navy-950/80 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
              +
            </span>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} image preview`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-md md:p-10"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-5 top-5 z-10 grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-xl text-white transition hover:bg-white/20"
            aria-label="Close image preview"
          >
            ×
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-4 z-10 grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-2xl text-white transition hover:bg-white/20 md:left-8"
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          <div
            className="relative h-[80vh] w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-4 z-10 grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-2xl text-white transition hover:bg-white/20 md:right-8"
              aria-label="Next image"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectGallery;
