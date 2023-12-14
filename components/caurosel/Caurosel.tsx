'use client'
import "react-image-gallery/styles/css/image-gallery.css";

import React from 'react'
import ImageGallery from "react-image-gallery";
import { images } from '../../constants/index';
const Caurosel = () => {
    return (
        <div className="w-200px">

            <ImageGallery autoPlay items={images} />
        </div>

    )
}

export default Caurosel




