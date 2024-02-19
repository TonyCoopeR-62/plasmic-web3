import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '@/plasmic-init';
import ContextProvider from '@/components/Web3Context';


export default function PlasmicHost() {
  return (
    PLASMIC && (
      <ContextProvider>
        <PlasmicCanvasHost />
      </ContextProvider>
    )
  );
}
