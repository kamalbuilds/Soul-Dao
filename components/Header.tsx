import { Spectral } from "@next/font/google";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { newKit } from "@celo/contractkit";
import { useCelo } from "@celo/react-celo";

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic']
});

export default function Header() {
  const { network } = useCelo();
  const issuerKit = newKit(network.rpcUrl);
  const issuerAddress = issuerKit.web3.eth.accounts.privateKeyToAccount(
    process.env.NEXT_PUBLIC_ISSUER_PRIVATE_KEY
  ).address;

  return (
    <Disclosure as="nav" className="bg-prosperity border-b border-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-1 focus:ring-inset focus:rounded-none focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block h-8 w-auto lg:block"
                    src="/logo.svg"
                    width="24"
                    height="24"
                    alt="Celo Logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <div className="inline-flex items-center px-1 pt-1 text-xl font-medium text-gray-900">
                    <div className={spectral.className}>
                      Phone Number Issuer
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex text-sm items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div>Issuer: {issuerAddress}</div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-celo-green py-2 pl-3 pr-4 text-base font-medium text-celo-green"
              >
                Home
              </Disclosure.Button>
              {/* Add here your custom menu elements */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
