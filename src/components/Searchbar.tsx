'use client'
import Image from "next/image";

const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="search"/>
      <button className="cursor-pointer">
        <Image src="/search.png" alt="" width={18} height={18}/>
        </button>
    </form>
  )
}

export default SearchBar;