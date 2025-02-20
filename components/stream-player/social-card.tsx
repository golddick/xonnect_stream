import React from 'react'
import { Button } from '../ui/button'
import { InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'
import Link from 'next/link'

interface SocialCardProps{
Instagram:string | null
Youtube:string | null
Twitter:string | null
}

export const SocialCard = ({Instagram, Youtube, Twitter}:SocialCardProps) => {
  if (!Instagram || !Youtube || !Twitter) {
    return(
      <div className=' flex flex-col gap-2 '>
        <Button variant={'ghost'}  size={'sm'}><InstagramIcon className=' size-5 text-neutral-500'/></Button>
        <Button variant={'ghost'}  size={'sm'}><YoutubeIcon className=' size-5 text-neutral-500'/></Button>
        <Button variant={'ghost'} size={'icon'} ><TwitterIcon className=' size-5 text-neutral-500'/></Button>
    </div>
    )
  }
  return (
    <div className=' flex flex-col gap-2 '>
      <Link href={Instagram}>
        <Button variant={'ghost'}  size={'sm'}><InstagramIcon className=' size-5 text-neutral-500'/></Button>
      </Link>
      <Link href={Youtube}>
        <Button variant={'ghost'}  size={'sm'}><YoutubeIcon className=' size-5 text-neutral-500'/></Button>
      </Link>
      <Link href={Twitter}>
        <Button variant={'ghost'} size={'icon'} ><TwitterIcon className=' size-5 text-neutral-500'/></Button>
      </Link>
    </div>
  )
}
