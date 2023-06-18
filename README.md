## Soul Dao

Connect your Souls to DAO , Connect Socially and get payed through ph numbers

Introducing Soul Dao on Celo, a groundbreaking decentralized autonomous organization (DAO) that leverages the power of social signup and Masa Soul Names to revolutionize the method of payments and enhance transparency.

Soul Dao is designed to reward its contributors in a unique and inclusive way. By integrating social signup, it allows individuals to become members of the DAO using their phone numbers. This innovative approach eliminates the need for complex onboarding processes, making it accessible to a wider audience.

The use of Celo blockchain ensures that transactions within Soul Dao are fast, secure, and cost-effective. By utilizing phone numbers as identifiers, contributors can receive payments directly to their mobile wallets, enabling seamless and convenient transactions.

One of the most exciting aspects of Soul Dao is the introduction of Masa Soul Names. These names provide each member with a distinct and personalized identity within the DAO ecosystem. Soul Names empower contributors to establish their unique presence and build a reputation within the community.

Furthermore, the Masa SBT mints play a crucial role in recognizing and showcasing the contribution levels of Soul Dao members. These mints, represented as badges, symbolize the dedication and efforts put forth by individuals in supporting the DAO. The more contributions made, the higher the level of recognition through these prestigious mints.

The integration of social signup, Masa Soul Names, and Masa SBT mints ensures a vibrant and engaging experience within Soul Dao. It fosters a sense of belonging, incentivizes active participation, and encourages individuals to contribute their skills and resources to the development and growth of the DAO.

With its innovative approach to payments and transparency, Soul Dao made with Celo sets a new standard in the realm of decentralized organizations. It empowers individuals to be part of a thriving community, offering them unique identities, and recognizing their valuable contributions in a transparent and rewarding manner.

https://explorer.celo.org/alfajores/tx/0x7eaf7195d1d56452ce3ac77ba99b6844999aa91e3917002b874fe3b52a207a8f/internal-transactions
The identifier is a sha3 hash of the ph no that is registered

## Getting Started

Set up your Twilio Verify backend

Sign up for or log in to your Twilio account and create a new Verify Service. This is what will allow you to send SMS verification messages.

Then head over to Twilio's Code Exchange and deploy the One Time Passcode (OTP) verification project. By default you'll have a nice web interface for testing verifications, but it also provides serverless functions hosted on Twilio for sending and checking OTPs that we will use from the mobile app. Make note of the base url for your deployed project, it will look something like this https://verify-1234-abcdef.twil.io (you can also grab this later).

Add the issuer private key `NEXT_PUBLIC_ISSUER_PRIVATE_KEY` and the twilio URL `NEXT_PUBLIC_TWILIO_URL` to the .env file

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
