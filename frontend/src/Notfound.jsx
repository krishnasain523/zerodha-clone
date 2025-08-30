import { Link } from "react-router-dom"
export default function Notfound()
{
    return(<>
   <section className="flex justify-center p-5 border-b border-[#fbfbfb] items-center h-[300px] mt-10">
        <div className="flex flex-col items-center text-center gap-2 ">
            <p className="text-[#424242] text-5xl font-semibold mb-5">Something went wrong </p>
            <p className="text-[#424242] text-[20px] mb-5">404 Not_found</p>
             <Link to="/" ><button className="bg-[#387ED1] px-10 py-[0.7rem]  font-medium rounded-sm text-white font-900 text-xl hover:bg-black">Go Home</button></Link>
        </div>
    </section>
    
    </>
    )
}