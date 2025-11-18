# Solana Wallet DApp 💰

A modern, user-friendly decentralized application (DApp) for interacting with the Solana blockchain. Built with Next.js and the Solana Wallet Adapter, this application provides essential wallet functionality on the Solana Devnet.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-18.3-blue?style=flat&logo=react)
![Solana](https://img.shields.io/badge/Solana-Web3.js-purple?style=flat&logo=solana)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

## ✨ What This Project Does

The Solana Wallet DApp is a web-based interface that enables users to:

- **Connect Solana Wallets**: Seamlessly connect popular Solana wallets (Phantom, Solflare, etc.) using the Solana Wallet Adapter
- **View Balance**: Monitor your SOL balance in real-time on the Solana Devnet
- **Request Airdrops**: Get test SOL tokens directly from the Devnet faucet
- **Send Tokens**: Transfer SOL to any Solana address with a simple interface
- **Sign Messages**: Cryptographically sign messages to verify wallet ownership

> **Note**: This DApp operates exclusively on **Solana Devnet** for testing and development purposes.

## 🚀 Why Use This Project

### Key Features

- **🔐 Multi-Wallet Support**: Compatible with all major Solana wallets through the official Wallet Adapter
- **💡 Beginner-Friendly**: Clean, intuitive UI perfect for learning Solana development
- **⚡ Fast & Responsive**: Built on Next.js 14 with modern React practices
- **🎨 Modern Design**: Sleek interface using Tailwind CSS and Radix UI components
- **🔔 Real-time Feedback**: Toast notifications for all transactions and operations
- **📱 Mobile Responsive**: Works seamlessly across desktop and mobile devices

### Perfect For

- Developers learning Solana blockchain development
- Testing Solana transactions without real funds
- Building proof-of-concepts for Solana applications
- Understanding wallet integration patterns

## 🛠️ Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.x or higher)
- **npm** or **yarn** package manager
- A **Solana wallet** extension (e.g., [Phantom](https://phantom.app/), [Solflare](https://solflare.com/))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Rahulhanje/Wallet_Adapter.git
   cd Wallet_Adapter
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

### Building for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## 📖 Usage Guide

### Connecting Your Wallet

1. Click the **"Select Wallet"** button in the top navigation
2. Choose your preferred Solana wallet from the modal
3. Approve the connection request in your wallet extension
4. Your wallet address and balance will be displayed

### Requesting an Airdrop

```typescript
// The app requests devnet SOL directly from Solana
// Maximum: 10 SOL per day per address on Devnet
```

1. Enter the amount of SOL you want (minimum restrictions apply)
2. Click the **"Airdrop"** button
3. Wait for confirmation - you'll see a success notification
4. Your balance will update automatically

### Sending Tokens

1. Enter the recipient's Solana wallet address
2. Specify the amount of SOL to send
3. Click the **"Send"** button
4. Approve the transaction in your wallet
5. Wait for blockchain confirmation

### Signing Messages

1. Type your message in the input field
2. Click **"Sign Message"**
3. Approve the signing request in your wallet
4. The signature will be verified and displayed in base58 encoding

## 🏗️ Project Structure

```
Wallet_Adapter/
├── app/
│   ├── layout.js          # Root layout with navbar
│   ├── page.js            # Main page with wallet providers
│   ├── SignMessage.jsx    # Message signing component
│   └── globals.css        # Global styles
├── components/
│   ├── NavBar.jsx         # Navigation bar
│   ├── RequestAirdrop.jsx # Airdrop functionality
│   ├── SendToken.jsx      # Token transfer functionality
│   ├── UserBalance.jsx    # Balance display
│   └── ui/                # Reusable UI components
├── lib/
│   └── utils.js           # Utility functions
├── public/                # Static assets
└── package.json           # Project dependencies
```

## 🔧 Technologies Used

- **[Next.js 14](https://nextjs.org/)**: React framework with App Router
- **[React 18](https://react.dev/)**: UI library
- **[Solana Web3.js](https://solana-labs.github.io/solana-web3.js/)**: Solana blockchain interaction
- **[Solana Wallet Adapter](https://github.com/solana-labs/wallet-adapter)**: Multi-wallet integration
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)**: Accessible component primitives
- **[React Toastify](https://fkhadra.github.io/react-toastify/)**: Toast notifications
- **[bs58](https://www.npmjs.com/package/bs58)**: Base58 encoding/decoding
- **[@noble/curves](https://www.npmjs.com/package/@noble/curves)**: Cryptographic operations

## 💻 Development

### Running the Linter

```bash
npm run lint
```

### Code Style

This project uses ESLint with Next.js recommended configuration. The code follows modern React patterns including:

- React Hooks for state management
- Client-side rendering with `"use client"` directive
- Async/await for blockchain operations
- Component composition with shadcn/ui patterns

## 🆘 Getting Help

If you encounter any issues or have questions:

- **GitHub Issues**: [Report a bug or request a feature](https://github.com/Rahulhanje/Wallet_Adapter/issues)
- **Email**: rahulhanje0.7@gmail.com
- **Solana Documentation**: [Official Solana Docs](https://docs.solana.com/)
- **Wallet Adapter Docs**: [Solana Wallet Adapter Guide](https://github.com/solana-labs/wallet-adapter)

### Common Issues

**Wallet not connecting?**
- Ensure you're using a supported Solana wallet
- Check that your wallet extension is unlocked
- Try refreshing the page

**Airdrop failing?**
- Devnet rate limits apply (max ~10 SOL per day)
- Try requesting a smaller amount
- Check Solana Devnet status

**Transaction errors?**
- Verify you have sufficient SOL for transaction fees
- Confirm the recipient address is valid
- Ensure you're connected to Devnet in your wallet

## 👥 Maintainers and Contributors

### Maintainer

**Rahul Hanje**
- GitHub: [@Rahulhanje](https://github.com/Rahulhanje)
- Email: rahulhanje0.7@gmail.com

### Contributing

Contributions are welcome! If you'd like to contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code:
- Follows the existing code style
- Passes all linting checks (`npm run lint`)
- Includes appropriate comments for complex logic
- Is tested on Solana Devnet

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## ⚠️ Disclaimer

This application is designed for **Solana Devnet only** and should not be used with real funds on Mainnet without proper security audits and additional safety measures. Always test thoroughly on Devnet before considering any mainnet deployment.

## 🔗 Useful Links

- [Solana Documentation](https://docs.solana.com/)
- [Solana Cookbook](https://solanacookbook.com/)
- [Wallet Adapter Documentation](https://github.com/solana-labs/wallet-adapter)
- [Next.js Documentation](https://nextjs.org/docs)
- [Solana Devnet Faucet](https://faucet.solana.com/)

---

Built with ❤️ using Solana and Next.js 
