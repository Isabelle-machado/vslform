
import React, { useEffect, useRef } from "react";

interface FormsAppEmbedProps {
  formId: string;
}

const FormsAppEmbed: React.FC<FormsAppEmbedProps> = ({ formId }) => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.setAttribute("formsappId", formId);
    }
  }, [formId]);

  return <div ref={formRef} className="w-full" />;
};

export default FormsAppEmbed;
