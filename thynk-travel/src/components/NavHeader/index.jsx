import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import ModalNavHeader from '../ModalNavHeader'

const navigation = [
  { name: 'Home', href: '#home-id-nav', current: true },
  { name: 'Destinos', href: '#destinos-id-nav', current: false },
  { name: 'Depoimentos', href: '#depoimentos-id-nav', current: false },
  { name: 'Categorias', href: '#categorias-id-nav', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavHeader() {
  const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth',
    })
  }

  const [openModal, setOpenModal] = useState(false)

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 md:px-16 sm:mx-4 backdrop-blur bg-slate-900 bg-opacity-40 rounded-b-lg 2xl:m-auto max-w-screen-2xl">
      {({ open }) => (
        <>
          <ModalNavHeader isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
            {/* Componente de modal */}
          </ModalNavHeader> 

          <div className="mx-auto"> 
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Botão de menu para dispositivos móveis */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-orange-500 font-bold">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Abrir menu principal</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center max-sm:hidden">
                  <img
                    className="h-10 w-auto"
                    src={`${process.env.PUBLIC_URL}/img/header/business-logo.png`}
                    alt="Logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* Links de navegação */}
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'text-white hover:bg-gray-700 hover:text-white'
                            : 'text-white hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 mt-1 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        onClick={(e) => {
                          e.preventDefault()
                          smoothScroll(item.href)
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Dropdown do perfil */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Abrir menu de usuário</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://i.pinimg.com/736x/de/ba/87/deba871bd0100ddf6f530dc30f87272a.jpg"
                        alt=""
                      />
                    </MenuButton>
                  </div>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem>
                        <button className="text-black w-full" onClick={() => setOpenModal(true)}>Login</button>
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* Painel de navegação para dispositivos móveis */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'text-white hover:bg-gray-700 hover:text-white'
                      : 'text-white hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScroll(item.href)
                  }}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
