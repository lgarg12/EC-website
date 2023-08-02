import Rightbar from "../Components/Rightbar";
import Topbar from "../Components/Topbar";
import Feed from "../Components/Feed";
import Leftbar from "../Components/Leftbar";
import Profile from "./Profile";

function Home(){
    return (
        <div>
            {/* <Topbar/>
            <div className="flex">
                <Leftbar/>
                <Feed/>
                <Rightbar/>
            </div> */}
            <Profile/>
        </div>
    )
}

export default Home;