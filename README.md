## Soul Dao

Connect your Souls to DAO , Connect Socially and get payed through ph numbers

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
