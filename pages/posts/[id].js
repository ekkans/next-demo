import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Post() {
  const {
    query: { id }
  } = useRouter()

  return <ul>
    <li><Link href='/'> home</Link></li>
    {id && <li>Id: {id}</li>}
    {id && <li><Link href={`${Number(id) + 1}`}> next</Link></li>}
  </ul>
}
