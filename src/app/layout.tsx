import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <h1>Raiz page</h1>

        {children}
      </body>
    </html>
  );
}
