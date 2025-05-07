import { assets } from './../assets/admin-assets/assets';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='bg-[#121212] min-h-screen pl-[4vw] pr-[4vw] flex flex-col items-center'>
            <img src={assets.logo} className='mt-5 w-[max(10vw,100px)] hidden sm:block' alt="logo" />
            <img src={assets.logo_small} className='mt-5 w-[max(10vw,10px)] mr-5 block sm:hidden' alt="logo_small" />
            
          

            <div className="flex flex-col gap-6 mt-12 w-full items-center">
                {[
                    { to: "/add-song", icon: assets.add_song, text: "Add Song" },
                    { to: "/list-song", icon: assets.song_icon, text: "List Song" },
                    { to: "/add-album", icon: assets.add_album, text: "Add Album" },
                    { to: "/list-album", icon: assets.album_icon, text: "List Album" },
                ].map(({ to, icon, text }) => (
                    <NavLink
                        to={to}
                        key={to}
                        className="w-[90%] max-w-[250px] flex items-center justify-center gap-3 bg-[#1f1f1f] text-white border border-[#6e2bcf] py-3 rounded-xl shadow-[0_4px_10px_rgba(110,43,207,0.5)] hover:bg-[#292929] transition-all"
                    >
                        <img src={icon} className='w-5' alt={text} />
                        <p className='text-base font-semibold'>{text}</p>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;
