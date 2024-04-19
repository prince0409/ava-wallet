# Ava Wallet Application

## Overview

Ava Wallet is a decentralized application (dApp) built with React and leverages the Wagmi library for interacting with the Ethereum blockchain. This application provides a user interface for managing an Ethereum account and performing basic operations like viewing account details and sending USDC tokens.

### How to run

Clone the repository and install the dependencies:

```bash
npm install
npm run dev
npm run test
```

## Structure

### Components

#### `App.tsx`

- Root component that sets up the basic layout of the application, including `Account` and `CommandCenter` components.

#### `Account` (`components/account.tsx`)

- Manages user authentication and displays account information like wallet status, address, and chain ID.
- Provides buttons to connect to different Ethereum connectors or disconnect.

#### `CommandCenter` (`components/command-center.tsx`)

- Enables users to send USDC tokens to other addresses.
- Includes input validation and displays transaction status updates (confirming, confirmed).

#### `Input` (`components/common/input.tsx`)

- Reusable input component customized for different types including text, number, email, and password.
- Supports props for error handling, disabled state, and required fields.

#### `InputAmount` (`components/common/input-amount.tsx`)

- Customized input component for amount entries, showing balance and an integrated label for currency type.

### Hooks

#### `useReadBalance` (`hooks/useReadBalance.ts`)

- Hook to fetch and display the balance of USDC in the connected wallet.

#### `useSendUSDC` (`hooks/useSendUSDC.ts`)

- Hook to facilitate sending USDC to a specified address, handling the write operations and transaction confirmations.

### Utilities

#### `turncateAddress` (`utils/turncate-address.ts`)

- Utility function to truncate Ethereum addresses for cleaner display.

### Styling

#### `index.css`

- Provides styles for the application using a dark theme palette, ensuring components are visually coherent and responsive.

## Reusability and Usage

The application components are designed to be reusable:

- The `Input` and `InputAmount` components can be easily utilized in other forms across the application or in other projects.
- The hooks `useReadBalance` and `useSendUSDC` abstract the complexities of blockchain interactions and can be integrated into other components or applications dealing with Ethereum-based transactions.

## Potential Improvements

### 1. More Robust CSS

- **Custom Color Variables**: Implementing CSS custom properties (variables) for colors and font sizes to make the UI more adaptable and easier to maintain.
- **Component-Based CSS Structure**: Refactoring the global CSS into a module-based approach where each component has its own scoped CSS file.

### 2. Integration Testing

- **Hardhat Integration**: Using Hardhat for local blockchain simulation to perform end-to-end integration tests, ensuring not only component functionality but also correct state changes on the blockchain.
- **Comprehensive Testing**: Expand coverage to include all utility functions, hooks, and components, incorporating Jest and React Testing Library.

### 3. Improved UI/UX

- **Design Implementation**: Adapting the components to fully match the UX/UI specifications provided, which could include more dynamic interactions and refined visual elements.

By addressing these areas, Ava Wallet can enhance its functionality, user experience, and maintainability, making it more robust and user-friendly for its purposes.
