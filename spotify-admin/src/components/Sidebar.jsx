import { assets } from './../assets/admin-assets/assets';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='bg-[#121212] min-h-screen pl-[4vw] text-white'>
            <img src={assets.logo} className='mt-5 w-[max(10vw,100px)] hidden sm:block' alt="logo" />
            <img src={assets.logo_small} className='mt-5 w-[max(10vw,10px)] mr-5 block sm:hidden' alt="logo_small" />
            <div className="flex flex-col gap-5 mt-10">
                <NavLink to={"/add-song"} className="flex items-center gap-2.5 bg-[#1f1f1f] border border-[#2d2d2d] p-2 pr-[max(8vw,10px)] text-sm font-medium text-white drop-shadow-[-3px_3px_#00e0ff] hover:bg-[#292929] transition">
                    <img src={assets.add_song} className='w-5' alt="Add Song" />
                    <p className='hidden sm:block'>Add Song</p>
                </NavLink>
                <NavLink to={"/list-song"} className="flex items-center gap-2.5 bg-[#1f1f1f] border border-[#2d2d2d] p-2 pr-[max(8vw,10px)] text-sm font-medium text-white drop-shadow-[-3px_3px_#00e0ff] hover:bg-[#292929] transition">
                    <img src={assets.song_icon} className='w-5' alt="List Song" />
                    <p className='hidden sm:block'>List Song</p>
                </NavLink>
                <NavLink to={"/add-album"} className="flex items-center gap-2.5 bg-[#1f1f1f] border border-[#2d2d2d] p-2 pr-[max(8vw,10px)] text-sm font-medium text-white drop-shadow-[-3px_3px_#00e0ff] hover:bg-[#292929] transition">
                    <img src={assets.add_album} className='w-5' alt="Add Album" />
                    <p className='hidden sm:block'>Add Album</p>
                </NavLink>
                <NavLink to={"/list-album"} className="flex items-center gap-2.5 bg-[#1f1f1f] border border-[#2d2d2d] p-2 pr-[max(8vw,10px)] text-sm font-medium text-white drop-shadow-[-3px_3px_#00e0ff] hover:bg-[#292929] transition">
                    <img src={assets.album_icon} className='w-5' alt="List Album" />
                    <p className='hidden sm:block'>List Album</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar;
