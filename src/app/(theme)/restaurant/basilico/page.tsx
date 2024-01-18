import ButtonComponent from '@/components/restaurant/basilico/Button/Button'

export default async function Home() {
    return (
        <main className={`flex flex-col items-center justify-between`}>
            <span className="text-4xl uppercase">Basilico</span>
            <ButtonComponent 
                btnText='Discovery Menu' 
                btnClass="relative text-[#000] mt-10 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:h-px before:w-full before:bg-[--primary] before:transition-all before:duration-300ms before:ease-in-out hover:before:-translate-y-2 hover:bg-right-top bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-pink-500 hover:transition-all hover:duration-300ms"
            />
        </main>
    )
}
