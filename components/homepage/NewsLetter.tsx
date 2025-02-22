export default function NewsLetter() {
    return (
        <div className="w-full bg-blueb-100 flex justify-between relative px-32 py-5 ">
            <div>
                <p className="text-blueb-900 text-2xl font-semibold">Join our newsletter</p>
                <p className="text-blueb-900 text-md font-light">We&amp;ll send you a nice letter once per week. No spam.</p>
            </div>
            <div className="flex items-center gap-5">
                    <input type="email" id="email" name="email" placeholder="Enter your email" size={30}className="w-full px-3 py-2 border rounded-md outline-none focus:border-blueb-500" />
                
                    <button type="submit" className="w-fit bg-blueb-700 text-white py-2  rounded hover:bg-blueb-600">Subscribe</button>
            </div>
        </div>
    )
}