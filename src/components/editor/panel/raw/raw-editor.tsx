"use client";

import { CodeEditor } from "@/components/code-editor";
import { useTMThemeStoreShallow } from "@/stores/tm-theme";
import { tryParseJSON } from "@/utils/json";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const RawEditor = () => {
  const searchParams = useSearchParams();
  const [tmThemeJSON, setTMThemeJSON] = useTMThemeStoreShallow((state) => [
    state.tmThemeJSON,
    state.setTMThemeJSON,
  ]);

  useEffect(() => {
    if (!tmThemeJSON) {
      setTMThemeJSON("{}");
    }
  }, [tmThemeJSON, setTMThemeJSON]);

  useEffect(() => {
    const themeUrl = searchParams.get("demo");
    if (themeUrl) {
      fetch(themeUrl)
        .then((res) => res.text())
        .then((json) => {
          const parsed = tryParseJSON(json);
          if (parsed) {
            setTMThemeJSON(JSON.stringify(parsed, null, 2));
          }
        });
    }
  }, [searchParams, setTMThemeJSON]);

  return (
    <CodeEditor
      value={tmThemeJSON}
      onChange={(value) => setTMThemeJSON(value)}
      height="85vh"
    />
  );
};

export default RawEditor;
