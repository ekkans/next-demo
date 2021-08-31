import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li><Link href='/posts/1'>See post</Link></li>
    </ul>
  )
}
