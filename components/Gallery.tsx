"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { galleryImages } from "@/data/galleryImages";

export default function Gallery() {
    const [index,setIndex] = useState(-1);
  return (
    <section className="p-6 md:p-15 lg:p-30">
        <div className="space-y-12">
            <div className="w-2/3 space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-AmoreChristmas">Image Gallery</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit provident odit itaque optio quos eveniet fugit repudiandae eum sapiente sed labore mollitia, porro dicta aspernatur rerum similique dolor voluptatum numquam?</p>
            </div>
            <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    galleryImages.map((galleryImage, i) => (
                        <div className="h-75 w-full relative overflow-hidden rounded-2xl" 
                            key={i}
                            onClick={() => setIndex(i)}
                        >
                            <Image 
                                src={galleryImage.src}
                                alt={galleryImage.alt}
                                fill
                                className="object-cover hover:scale-105 transition"
                            />
                        </div>
                    ))
                }

                <Lightbox
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    index={index}
                    slides={galleryImages}
                    carousel={{
                        imageFit: "contain",
                    }}
                    styles={{
                        container: {
                            padding: 0
                        }
                    }}
                />
            </div>
        </div>
    </section>
  );
}
