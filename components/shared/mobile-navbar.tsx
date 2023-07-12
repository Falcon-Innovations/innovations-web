import { Menu, Transition } from "@headlessui/react"
import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { Fragment } from "react"

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ")
}

const NAVBAR_LINKS = ["Home", "About", "Services", "Projects", "Contact"]

const MobileNavbar = () => {
  return (
    <Menu as="div" className="relative flex w-full px-4 pt-2 sm:hidden">
      <div className="w-full">
        <Menu.Button className="flex w-full rounded-full text-sm">
          {({ open }) => (
            <>
              {open ? (
                <div className="flex  w-full items-center justify-between">
                  <h1 className="text-lg font-bold">
                    Falcon<span className="text-blue-600">Innovations</span>
                  </h1>
                  <X className="h-8 w-8 text-neutral-600" />
                </div>
              ) : (
                <div className="flex  w-full items-center justify-between">
                  <h1 className="text-lg font-bold">
                    Falcon<span className="text-blue-600">Innovations</span>
                  </h1>
                  <Image src="hamburger-menu.svg" alt="burger-menu" width={24} height={28} />
                </div>
              )}
            </>
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute inset-0 z-10 mt-12 min-h-screen w-full origin-top-right bg-white px-4 py-1">
          {NAVBAR_LINKS.map((link) => (
            <Menu.Item key={link}>
              {({ active }) => (
                <Link
                  href={link}
                  className={classNames(active ? "bg-gray-100" : "", "block py-2 text-sm text-neutral-900")}
                >
                  {link}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default MobileNavbar
