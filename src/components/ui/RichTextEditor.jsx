import { useRef } from "react";

export default function RichTextEditor({
  label,
  required = false,
  placeholder = "",
  value = "",
  onChange,
  maxLength,
  showCounter = false,
}) {
  const editorRef = useRef(null);

  const exec = (command) => {
    editorRef.current.focus();
    document.execCommand(command, false, null);
    onChange(editorRef.current.innerHTML);
  };

  const handleInput = () => {
    const text = editorRef.current.innerText;

    // ⛔ no limit → do nothing
    if (!maxLength) {
      onChange?.(text);
      return;
    }

    // ⛔ enforce limit
    if (text.length > maxLength) {
      editorRef.current.innerText = text.slice(0, maxLength);

      // keep cursor at end
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(editorRef.current);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    }

    onChange?.(editorRef.current.innerText);
  };

  return (
    <div>
      {/* LABEL */}
      <label className="flex items-center gap-1 text-sm font-medium mb-2">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      {/* EDITOR CONTAINER */}
      <div className="rounded-lg overflow-hidden bg-[#E5E5E5]">
        {/* TOOLBAR */}
        <div className="flex items-center bg-[#3F3F3F] text-white text-xs select-none">
          <ToolbarBtn label="B" onClick={() => exec("bold")} />
          <ToolbarBtn label="I" onClick={() => exec("italic")} />
          <ToolbarBtn label="S" onClick={() => exec("strikeThrough")} />

          <Divider />

          <ToolbarBtn label="•" onClick={() => exec("insertUnorderedList")} />
          <ToolbarBtn label="1." onClick={() => exec("insertOrderedList")} />

          <Divider />

          <ToolbarBtn label="≡" onClick={() => exec("justifyLeft")} />

          <Divider />

          <ToolbarBtn label="A²" onClick={() => exec("superscript")} />
          <ToolbarBtn label="A₂" onClick={() => exec("subscript")} />
        </div>

        {/* EDITABLE AREA */}
        <div className="relative">
          <div
            ref={editorRef}
            contentEditable
            onInput={handleInput}
            className="editor-area min-h-[140px] px-4 py-3 text-sm outline-none bg-transparent"
            data-placeholder={placeholder}
            suppressContentEditableWarning
          />

          {/* CHARACTER COUNTER (OPTIONAL) */}
          {showCounter && maxLength && (
            <span className="absolute bottom-2 right-3 text-xs text-gray-500">
              {editorRef.current?.innerText.length || 0} / {maxLength}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- SMALL UI HELPERS ---------- */

function ToolbarBtn({ label, onClick }) {
  return (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()} // keeps text selection
      onClick={onClick}
      className="px-3 py-2 hover:bg-black/20"
    >
      {label}
    </button>
  );
}

function Divider() {
  return <div className="w-px h-6 bg-white/30 mx-1" />;
}
