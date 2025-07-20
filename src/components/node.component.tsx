// node.component.tsx
import type { ReactNode } from 'react';

interface NyobaProps {
  children: ReactNode;
}

const Nyoba = ({ children }: NyobaProps) => {
  return <>{children}</>; // atau bisa bungkus di <div> jika perlu
};

export default Nyoba;
