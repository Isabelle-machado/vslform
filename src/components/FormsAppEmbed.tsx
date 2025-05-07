
import React, { useEffect, useRef } from "react";

interface FormsAppEmbedProps {
  formId?: string;
  tallyUrl?: string;
}

const FormsAppEmbed: React.FC<FormsAppEmbedProps> = ({ formId, tallyUrl }) => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      if (formId) {
        formRef.current.setAttribute("formsappId", formId);
      }
      
      if (tallyUrl && typeof window !== "undefined") {
        // Clear any existing content
        while (formRef.current.firstChild) {
          formRef.current.removeChild(formRef.current.firstChild);
        }
        
        // Create and append the Tally iframe
        const iframe = document.createElement("iframe");
        iframe.src = tallyUrl;
        iframe.width = "100%";
        iframe.height = "600px";
        iframe.frameBorder = "0";
        iframe.marginHeight = "0";
        iframe.marginWidth = "0";
        iframe.title = "Tally Form";
        iframe.style.width = "100%";
        
        formRef.current.appendChild(iframe);
      }
    }
  }, [formId, tallyUrl]);

  return <div ref={formRef} className="w-full min-h-[600px]" />;
};

export default FormsAppEmbed;
