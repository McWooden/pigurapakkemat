import Base from "./Base";
import data from '../links.json'
import Link from "./Link";

export default function LinkTree() {
    return <Base>
        <div className="flex flex-col">
            <p className="bg-primary rounded-t-lg text-base font-semibold p-2 pb-0 w-fit">Selamat datang di lorong pigura!</p>
            <p className="bg-primary rounded-b-lg rounded-tr-lg text-base font-semibold p-2 w-fit">setiap pintu berikut menuju keajaiban</p>
        </div>
        <div className='flex flex-col gap-3 mt-4 w-full relative'>
            {data?.map((x, i) => <Link key={i} item={x} index={i}/>) || <p>Tidak dapat menampilkan link! link JSON memiliki masalah di dalam filenya</p>}
            <p className="absolute top-0 right-3 font-bold text-4xl rotate-180">...</p>
            <p className="absolute bottom-4 right-0 font-bold text-4xl rotate-[270deg] tracking-tighter">{">>>"}</p>
        </div>
        <p>Tidak menemukan apa yang anda cari? hubungi kami ya! Terimakasih</p>
    </Base>
}