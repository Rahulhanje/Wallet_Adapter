# Solana Wallet DApp 💰

A modern, user-friendly decentralized application (DApp) for interacting with the Solana blockchain. Built with Next.js and the Solana Wallet Adapter, this application provides essential wallet functionality on the Solana Devnet.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-18.3-blue?style=flat&logo=react)
![Solana](https://img.shields.io/badge/Solana-Web3.js-purple?style=flat&logo=solana)

> **⚠️ Important**: This application is designed for **Solana Devnet only** for testing and development purposes. Do not use with real funds on Mainnet.

## 📖 Table of Contents

- [What This Project Does](#-what-this-project-does)
- [Why Use This Project](#-why-use-this-project)
- [Quick Start](#-quick-start)
- [Getting Started](#-getting-started)
- [Usage Guide](#-usage-guide)
- [Project Structure](#-project-structure)
- [Technologies Used](#-technologies-used)
- [Development](#-development)
- [Getting Help](#-getting-help)
- [Maintainers and Contributors](#-maintainers-and-contributors)

## ✨ What This Project Does

The Solana Wallet DApp is a web-based interface that enables users to:

- 🔗 **Connect Solana Wallets**: Seamlessly connect popular Solana wallets (Phantom, Solflare, etc.) using the Solana Wallet Adapter
- 💰 **View Balance**: Monitor your SOL balance in real-time on the Solana Devnet
- 🪂 **Request Airdrops**: Get test SOL tokens directly from the Devnet faucet (up to 10 SOL per day)
- 📤 **Send Tokens**: Transfer SOL to any Solana address with a simple interface
- ✍️ **Sign Messages**: Cryptographically sign messages to verify wallet ownership

## 🚀 Why Use This Project

### Key Features

- **🔐 Multi-Wallet Support**: Compatible with all major Solana wallets through the official Wallet Adapter
- **💡 Beginner-Friendly**: Clean, intuitive UI perfect for learning Solana development
- **⚡ Fast & Responsive**: Built on Next.js 14 with modern React practices
- **🎨 Modern Design**: Sleek interface using Tailwind CSS and Radix UI components
- **🔔 Real-time Feedback**: Toast notifications for all transactions and operations
- **📱 Mobile Responsive**: Works seamlessly across desktop and mobile devices

### Perfect For

- 🎓 Developers learning Solana blockchain development
- 🧪 Testing Solana transactions without real funds
- 🚀 Building proof-of-concepts for Solana applications
- 📚 Understanding wallet integration patterns

## ⚡ Quick Start

Get up and running in 3 minutes:

```bash
# Clone the repository
git clone https://github.com/Rahulhanje/Wallet_Adapter.git
cd Wallet_Adapter

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser and connect your Solana wallet!

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

Get test SOL tokens for development:

```javascript
// The app requests devnet SOL directly from Solana
// Maximum: 10 SOL per day per address on Devnet
```

**Steps:**
1. Enter the amount of SOL you want (minimum restrictions apply)
2. Click the **"Airdrop"** button
3. Wait for confirmation - you'll see a success notification
4. Your balance will update automatically

> **Note**: If airdrops fail, the Devnet faucet may be rate-limited. Try requesting a smaller amount or wait a few minutes.

### Sending Tokens

Transfer SOL to another wallet:

**Steps:**
1. Enter the recipient's Solana wallet address
2. Specify the amount of SOL to send
3. Click the **"Send"** button
4. Approve the transaction in your wallet
5. Wait for blockchain confirmation

> **Important**: Ensure you have sufficient SOL for both the transfer amount and transaction fees (~0.000005 SOL).

### Signing Messages

Verify your wallet ownership by signing messages:

**Steps:**
1. Type your message in the input field
2. Click **"Sign Message"**
3. Approve the signing request in your wallet
4. The signature will be verified and displayed in base58 encoding

**Example use cases:**
- Proving wallet ownership for authentication
- Signing terms of service or agreements
- Creating verifiable off-chain signatures

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

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

### Code Style

This project uses ESLint with Next.js recommended configuration. The code follows modern React patterns including:

- React Hooks for state management
- Client-side rendering with `"use client"` directive
- Async/await for blockchain operations
- Component composition with shadcn/ui patterns

### Development Tips

- Always test on **Devnet** before considering mainnet deployment
- Use browser console to debug wallet connection issues
- Check Solana Devnet status if experiencing network issues
- Keep your wallet extension updated for best compatibility

## 🆘 Getting Help

If you encounter any issues or have questions:

- **📋 GitHub Issues**: [Report a bug or request a feature](https://github.com/Rahulhanje/Wallet_Adapter/issues)
- **📧 Email**: rahulhanje0.7@gmail.com
- **📚 Solana Documentation**: [Official Solana Docs](https://docs.solana.com/)
- **🔗 Wallet Adapter Docs**: [Solana Wallet Adapter Guide](https://github.com/solana-labs/wallet-adapter)

### Troubleshooting

<details>
<summary><strong>Wallet not connecting?</strong></summary>

- Ensure you're using a supported Solana wallet (Phantom, Solflare, etc.)
- Check that your wallet extension is unlocked
- Try refreshing the page
- Clear browser cache and cookies
- Make sure your wallet is set to Devnet (not Mainnet)
</details>

<details>
<summary><strong>Airdrop failing?</strong></summary>

- Devnet rate limits apply (max ~10 SOL per day per address)
- Try requesting a smaller amount (e.g., 1-2 SOL)
- Wait 5-10 minutes between airdrop requests
- Check [Solana Status](https://status.solana.com/) for network issues
- Use alternative faucets: [SolFaucet](https://solfaucet.com/) or [QuickNode Faucet](https://faucet.quicknode.com/solana/devnet)
</details>

<details>
<summary><strong>Transaction errors?</strong></summary>

- Verify you have sufficient SOL for transaction fees (~0.000005 SOL)
- Confirm the recipient address is valid and correctly formatted
- Ensure you're connected to Devnet in your wallet settings
- Check your wallet has approved the transaction
- If transaction is stuck, wait a few blocks or try with higher priority fees
</details>

<details>
<summary><strong>Build or installation issues?</strong></summary>

- Ensure you're using Node.js version 16.x or higher
- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Try clearing npm cache: `npm cache clean --force`
- Check for conflicting global packages
</details>

## 👥 Maintainers and Contributors

### Maintainer

**Rahul Hanje**
- GitHub: [@Rahulhanje](https://github.com/Rahulhanje)
- Email: rahulhanje0.7@gmail.com

### Contributing

Contributions are welcome! Whether you're fixing bugs, improving documentation, or proposing new features, your help is appreciated.

**How to contribute:**

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Test your changes on Devnet
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

**Contribution Guidelines:**
- Ensure your code passes all linting checks (`npm run lint`)
- Test thoroughly on Solana Devnet
- Update documentation if you change functionality
- Keep commits focused and descriptive
- Be respectful and constructive in discussions

## 📄 License

This project is open source and available under the MIT License. See the repository for more details.

## ⚠️ Disclaimer

This application is designed for **Solana Devnet only** and should not be used with real funds on Mainnet without proper security audits and additional safety measures. 

**Important warnings:**
- Always verify you're on Devnet before making transactions
- Never share your seed phrase or private keys
- This is educational software - use at your own risk
- Not audited for production use

## 🔗 Useful Links

- [Solana Documentation](https://docs.solana.com/)
- [Solana Cookbook](https://solanacookbook.com/)
- [Wallet Adapter Documentation](https://github.com/solana-labs/wallet-adapter)
- [Next.js Documentation](https://nextjs.org/docs)
- [Solana Devnet Faucet](https://faucet.solana.com/)

---

Built with ❤️ using Solana and Next.js 
