import { BiSolidMessageDetail } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

export default function Topbar() {
  return (
    <div className="flex justify-between p-1 items-center bg-blue-500 text-white">

      <div className="flex-1 text-3xl font-semibold">
        SOCIAL
      </div>

      <div className="flex items-center gap-2 flex-1 mr-5"> {/* Fraction 2 */}
        <AiOutlineSearch className="hover:cursor-pointer text-2xl"/>
        <input
            className="border-2 rounded-2xl p-2 w-full focus:outline-none focus:border-transparent"
            placeholder="Search...."
        />
      </div>

      <div className="flex items-center justify-between flex-1"> {/* Fraction 3 */}
        <div className="flex gap-3">
          <div>HomePage</div>
          <div>Timeline</div>
        </div>
        <div className="flex gap-4">
            <div className="flex">
              <BiSolidMessageDetail className="hover:cursor-pointer text-2xl"/> 
              <span>1</span>
            </div>
            <div className="flex">
              <BsFillPersonFill className="hover:cursor-pointer text-2xl"/>
              <span>2</span>
            </div>
            <div className="flex">
              <IoMdNotifications className="hover:cursor-pointer text-2xl"/>
              <span>1</span>
            </div>
        </div>
        <img src="/Assest/person/1.jpeg" alt="user pic" className="rounded-full w-20 h-20 object-cover" />
      </div>
    </div>
  )
}
