export default function Link({item, index}) {
    return <a href={item.link} className="bg-secondary text-base rounded-full flex flex-col items-center shadow-2xl drop-shadow xl w-[80%]">
        <div className="flex gap-2 shadow-xl bg-primary w-full p-2 rounded-2xl items-center">
            <div className="min-w-6 h-6 bg-base text-primary grid place-items-center font-semibold rounded-full">{index + 1}</div>
            <p className="text-sm font-semibold">{item?.title || 'Tanpa judul'}</p>
        </div>
        {item.desc && <div className="w-full px-6 animate-pulse ">
            <p className="text-xs opacity-80 text-ellipsis text-nowrap overflow-hidden">{item.desc}</p>
        </div>}
    </a>
}