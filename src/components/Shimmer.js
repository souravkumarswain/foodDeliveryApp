import { LOADER_GIF } from "../utils/constants";

const Shimmer = () => {
return <>
    <div>
    <div className = "fixed inset-0 flex items-center justify-center mt-25">
        <img src={LOADER_GIF} alt="Loading..." className="w-20 h-20"/>
    </div>
</div>
</>
}

export default Shimmer;