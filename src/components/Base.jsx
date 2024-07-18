export default function Base({children}) {
    return <div className="p-4 flex flex-col gap-2 max-w-lg mx-auto w-full">
        {children}
    </div>
}