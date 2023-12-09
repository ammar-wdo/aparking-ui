"use client"

import { BlockNoteEditor } from "@blocknote/core";
import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote ,Theme,darkDefaultTheme,lightDefaultTheme} from "@blocknote/react";

import { useEffect, useState } from "react";



// Our <Editor> component we can reuse later


type Props ={

    initialContent?:string,

}
export default function Editor({initialContent}:Props) {

    const theme = {
   ...lightDefaultTheme,
        componentStyles: (theme) => ({
          // Adds basic styling to the editor.
          Editor: {
         
            paddingInline:0,
          
          },
          

       
        }),
     } satisfies Theme;
      




    
    



  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({
    editable:false,
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
   
   


  });






  return <div><BlockNoteView  theme={theme}  editor={editor} /></div>;
}