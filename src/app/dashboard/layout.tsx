import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <h1>App</h1>
      {children}
    </div>
  );
};

export default AppLayout;
