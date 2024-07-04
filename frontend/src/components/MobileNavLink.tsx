import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"

function MobileNavLink() {
    const { logout } = useAuth0()
  return (
    <>
        <Link to="/user-profile" className="flex bg-white items-center font-bold hover:text-cyan-500">
            Profile
        </Link>
        <Button onClick={()=> logout() } className="flex items-center font-bold px-3 hover:bg-slate-700">
            Log Out 
        </Button>
    </>
  )
}

export default MobileNavLink