import Link from 'next/link'
import icon from '@/public/images/logo.png'
import Image from 'next/image'
export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image src={icon} width={100}  alt="Picture of the author"/>
    </Link>
  )
}
