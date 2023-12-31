import { Play } from "./Player";

const PlayButton = () => {
  return (
    <button class="absolute bottom-0 right-[5%] bg-[#1ed760] rounded-full p-4 z-10
        transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2
        hover:scale-110 hover:bg-[#1fdf64]"
    >
        <span>
            <Play/>
        </span>      
    </button>
  )
}

export default PlayButton