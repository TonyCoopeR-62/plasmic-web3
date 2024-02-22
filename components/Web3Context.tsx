import '@rainbow-me/rainbowkit/styles.css';
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { arbitrum, mainnet, optimism, polygon, sepolia } from 'wagmi/chains'

// Setup queryClient
const queryClient = new QueryClient()

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || ""

if (!projectId) throw new Error('Project ID is not defined')


const config = getDefaultConfig({
  appName: 'web3-plasmic-app',
  projectId,
  chains: [mainnet, polygon, optimism, arbitrum, sepolia],
  ssr: true,
});

export default function ContextProvider({
  children,
}: {
  children: ReactNode
}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}