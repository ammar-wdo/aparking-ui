'use client'

import { Button } from "@/components/ui/button";
import { useCrisp } from "@/hooks/crisp-hook";

type Props = {}

const LiveChatButton = (props: Props) => {

    const { setOpen } = useCrisp();
  return (
    <Button variant={'link'} className="text-white justify-start p-0 font-light underline-offset-1 py-0 h-fit text-base "  onClick={setOpen}>Live chat</Button>
  )
}

export default LiveChatButton