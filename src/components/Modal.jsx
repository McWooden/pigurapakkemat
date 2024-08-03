export default function Modal({isOpen, children}) {
    if (!isOpen) return

    return <div className="fixed z-10 inset-0 bg-neutral-900 bg-opacity-55 flex justify-center items-center">
        <div className="container-lg p-2">
            {children}
        </div>
    </div>
}