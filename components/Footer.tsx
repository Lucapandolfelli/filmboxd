import Link from "next/link";

export default function Footer () {
  return (
    <footer className='bg-[#2c3440] h-[235px] pt-[1rem]'>
      <div className='max-w-5xl mx-auto text-[#99aabb] text-center'>
        <p>&copy; 2023. Designed by <Link href='https://lucapandolfelli.com'>Luca Pandolfelli</Link></p>
      </div>
    </footer>
  )
}