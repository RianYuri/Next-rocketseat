import { ReactNode } from "react";

export const metadata = {
  default:'Home',
  template:'%s Rocketseat'
}
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
