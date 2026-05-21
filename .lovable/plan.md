## Zmiana

Usunąć z landing page sekcję „Wszystko, czego potrzebuje nowoczesna spedycja" (komponent `Features` w `src/routes/index.tsx`).

## Kroki

1. W `src/routes/index.tsx`:
   - Usunąć definicję komponentu `Features` (sekcja `#funkcje` z 4 kafelkami).
   - Usunąć `<Features />` z `Landing`.
   - Usunąć z navbara link „Funkcje" — obecnie i tak go nie ma w nawigacji, więc bez zmian tam.
   - Posprzątać nieużywane importy ikon (`Gauge`, `Users`, `Sparkles`) — `Radio` zostawić, bo używany w `Benefits`.

Pozostałe sekcje (Hero, Benefits, HowItWorks, Pricing, FAQ, FinalCTA, Footer) bez zmian.
