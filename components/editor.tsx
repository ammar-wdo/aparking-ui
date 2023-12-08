"use client"

import { BlockNoteEditor } from "@blocknote/core";
import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";

import { useEffect, useState } from "react";



// Our <Editor> component we can reuse later


type Props ={

    initialContent?:string,

}
export default function Editor({initialContent}:Props) {






    
    



  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({
    editable:false,
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
   


  });




  return <div><BlockNoteView   editor={editor} /></div>;
}