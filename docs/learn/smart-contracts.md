# Smart Contracts (Draft)

Smart Contracts are self-executing agreements coded onto the blockchain. These agreements execute when the conditions written into the code are met. They're one of the most powerful features of blockchain technology, and Qubic implements them in a uniquely efficient and secure way.

## How Smart Contracts Work in Qubic

Qubic's smart contracts are based on public functions from the contract source code. Each function accepts a C++ struct as input and returns another C++ struct as output. The invocation of a function by users (requiring client software) is essentially a transaction with the `destinationPublicKey` set to the contract index.

The `inputType` of the transaction is set to the index of the called function, and `inputSize` is set to `sizeof(inputStruct)`. The `amount` can be non-zero to simultaneously transfer qus when a smart contract function is called, and the amount is deducted from `sourcePublicKey` only if the function is called.

Data from the input struct are injected between `inputSize` and the signature. If not enough data are supplied, the remaining portion is filled with zeros. If the data exceed the actual input data, then the input is truncated.

## Examples of Smart Contracts in Qubic

The first smart contract in Qubic was an Initial Public Offering (IPO) of 676 shares of a decentralized exchange (DEX) named QX. Smart contracts are also used for burning QUs as part of transaction fees, similar to the gas model in Ethereum. 

For example, the first smart contract burned over 10.18 trillion QUs, which was about 15% of the total supply at that moment. This action shows the deflationary potential of QUs through the use of smart contracts and the Qubic chain.

## Future of Smart Contracts in Qubic

Qubic's approach to smart contracts opens a world of possibilities for automated, decentralized applications (dApps). By utilizing the powerful and efficient Qubic blockchain along with the versatility of smart contracts, developers have an unprecedented level of flexibility and security for creating innovative dApps.

Developers are already building on the potential of smart contracts in Qubic, with many exciting developments on the horizon. As the ecosystem continues to evolve, the use of smart contracts in Qubic will undoubtedly become even more integral and diverse.


aus den faq:
Smart Contracts (SC) on Qubic are truly remarkable as they harness the power of Qubic Units (QUs) as "energy" to facilitate contract execution. Unlike traditional Smart Contracts, Qubic SCs are frictionless and highly scalable, effectively reducing inflation by "burning" the QUs used in their execution. Additionally, Qubic SCs have the extraordinary ability to incorporate real-world data through Qubic's oracles, significantly enhancing their utility and applicability.

A fascinating aspect is that the execution of SCs consumes QUs, yet remains free for users as the SC self-finances through funds collected during its Initial Coin Offering. However, SCs also have the option to request QUs from users for their services, offering a dynamic and flexible approach to their functionality.

In summary, Qubic revolutionizes the concept of Smart Contracts with these innovative features, making them more efficient and adaptable to real-world needs. By allowing integration of external data sources, Qubic SCs open up new possibilities for decentralized applications, bringing us closer to a future with improved efficiency and seamless interactions on the blockchain.