

const Title = ({ title }: any) => {
    return (
        <div className="w-fit bg-[var(--primary-button-bg)] px-4 py-2 rounded-md">
            <p className="text-center text-[var(--secondary-text-color)] text-xs sm:text-sm capitalize font-thin">{title}</p>
        </div>
    )
}

export default Title

