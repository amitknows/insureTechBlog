import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {

  // const [length, setLength] = useState(defaultValue.length)
 
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="podbc05ebua6auroibsqeyvxupnk4w7evsnfp3virnstdq86"
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              branding: false,
              height: 500,
              menubar: true,
              plugins:
                "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker ",
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
