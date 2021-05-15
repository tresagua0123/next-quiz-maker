import { useRouter } from 'next/router'

export function pushURL(e: React.MouseEvent<HTMLDivElement, MouseEvent>, url: string){
    const router = useRouter();
    e.preventDefault();
    router.push(url)
}