export default function Navbar() {
    return <div className="bg-primary text-neutral-200 p-4 sticky top-0 flex gap-2 justify-between items-center shadow-md">
        <span className="w-4 h-4 rounded bg-base"></span>
        <h1><span className="text-xl rounded bg-base text-primary ">P</span><span className="underline decoration-solid decoration-secondary">igura Pak Kemat</span></h1>
        <div className="flex gap-2">
            <span className="w-4 h-4 rounded bg-base"></span>
            <span className="w-4 h-4 rounded bg-secondary"></span>
        </div>
    </div>
}