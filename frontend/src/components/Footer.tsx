
function Footer() {
  return (
    <div className="bg-cyan-700 py-10">
        <div className=" container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-3xl font-bold text-white tracking-tighter"> FoodApp</span>
            <span className="text-white font-bold tracking-tighter flex gap-4">
                <span>About Us </span>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </span>
        </div>
    </div>
  )
}

export default Footer