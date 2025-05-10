/*
Zadání: Vytvořte v této komponentě efekt, který pomocí funkce `setTimeout` po 3 vteřinách
  od prvního zobrazení komponenty v konzoli vypíše text „Jsem tady“.
*/

import { useEffect, useState } from "react";

export const Ukol3 = () => {
  const [zprava, setZprava] = useState(""); // výchozí hodnota: prázdný řetězec

  useEffect(() => {
    setTimeout(() => {
      setZprava("Jsem tady");
      console.log("Jsem tady");
    }, 3000);
  }, []);

  return (
    <p>{zprava}</p>
  );
};