import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import myproduct from '../products.json'
import { useState } from "react";
import Modal from "./Modal";

export default function Products() {

    return <div className='grid grid-cols-1 sm:grid-cols-2 p-4 gap-2 max-w-5xl'>
        {myproduct.map((product, i) => <Product key={i} product={product}/>)}
    </div>
}

function Product({product}) {
    const [index, setIndex] = useState(1)
    function addIndex() {
        if (index >= product.image.totalImage) {
            setIndex(1)
        } else {
            setIndex(prev => prev + 1)
        }
    }
    function minIndex() {
        if (index === 1) {
            setIndex(product.image.totalImage)
        } else {
            setIndex(prev => prev - 1)
        }
    }
    return <div className='flex flex-col'>
        <div className='flex flex-col'>
            <div className="flex w-fit items-center relative">
                <p className="bg-primary text-base text-2xl font-semibold p-3 rounded-t-xl">{product.name}</p>
                <div className="border-secondary border-[26px] border-t-transparent border-r-transparent h-0 absolute -right-[3.06rem] top-1"/>
            </div>
            <div className='bg-primary h-52 rounded-b-xl rounded-tr-xl flex gap-2 justify-between items-center p-2'>
                <div className="bg-secondary h-full flex items-center cursor-pointer px-2 rounded active:scale-95" onClick={minIndex}><FaChevronLeft className="text-base"/></div>
                <ProductImage imageUrl={`/products/${product.image.pattern}${index}.webp`}/>
                <div className="bg-secondary h-full flex items-center cursor-pointer px-2 rounded active:scale-95" onClick={addIndex}><FaChevronRight className="text-base"/></div>
            </div>
        </div>
        <div className='flex flex-col p-4'>
            <p className='font-bold'>Deskripsi product</p>
            <ul className=''>
                {product.points.map((item, i) => <li key={i} className='font-semibold'>- {item}</li>)}
            </ul>
        </div>
        <a href="https://wa.me/6285876610636" className="mx-auto mt-auto w-[90%]">
            <div className='bg-primary text-base p-2 rounded-xl w-full mx-auto mt-auto'>
                <p className='text-center'>Pesan disini (Whatsapp)</p>
            </div>
        </a>
    </div>
}

function ProductImage({imageUrl}) {
    const [openModal, setOpenModal] = useState(false)
    return <div className="bg-base rounded-xl w-full h-full bg-center bg-cover cursor-pointer" style={{backgroundImage: `url(${imageUrl})`}} onClick={() => {
        setOpenModal(prev => !prev)
    }}>
        <Modal isOpen={openModal}>
            <img src={imageUrl} alt="Gambar contoh pigura" className="rounded-xl"/>
        </Modal>
    </div>
}