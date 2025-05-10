/*
Zadání 1: Vytvořte v této komponentě stav `nacteno`, který bude mít výchozí hodnotu `false`.
  Dále vytvořte efekt, který po 3 vteřinách od prvního načtení komponenty nastaví stav `nacteno` na `true`.
  Představte si to jako simulaci načítání dat z API, které bude trvat zhruba 3 vteřiny.
Zadání 2: Pomocí ternárního operátoru zobrazte text `Načítám…` nebo `Hotovo!` podle hodnoty
  ve stavu `nacteno`.
*/

import { useEffect, useState } from "react";

export const Ukol4 = () => {
  const [nacteno, setNacteno] = useState(false); // Zadání 1

  useEffect(() => {
    const timer = setTimeout(() => {
      setNacteno(true); // po 3 sec se načte
    }, 3000);

    return () => clearTimeout(timer); // 🧹 bezpečné zrušení timeoutu
  }, []);
  
  return (
    <>
      <p>{nacteno ? 'Hotovo!' : 'Načítám…'}</p> {/* Zadání 2 */}
    </>
  );
};
