"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

type Props = {
  content: string;
};

const Slicer = ({ content }: Props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="text-sm text-gray-600 mt-4    ">
      {!show ? (
        content.length > 300 ? (
          <p>
            {`${content.slice(0, 300)}...`}
            <Button onClick={() => setShow(true)} variant={"link"}>
              See more
            </Button>
          </p>
        ) : (
          content
        )
      ) : (
        content
      )}
    </div>
  );
};

export default Slicer;
