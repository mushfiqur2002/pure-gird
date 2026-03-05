import Title from "./ui/Titel";

export default function Service() {
    return (
        <div className="w-full px-4 sm:px-6 md:px-8 xl:px-12 py-10 flex flex-col md:flex-row">
            {/* heading */}
            <div className="w-full flex flex-col justify-start items-start pb-8 sm:pb-12 px-4 sm:px-6 md:px-8 xl:px-12 bg-white z-30 relative">
                <Title title='Our Services' />
                <p className="capitalize text-[22px] sm:text-[28px] md:text-[32px] leading-6 sm:leading-10 pt-4 sm:pt-0">
                    PureGrid is the Preferred Choice for <br></br> Industry Leaders.
                </p>
            </div>


        </div>
    )
}
