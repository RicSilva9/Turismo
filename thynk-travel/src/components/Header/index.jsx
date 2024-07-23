import React, { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import classNames from 'classnames';
import ModalLogin from '../ModalLogin';

const navigation = [
  { name: 'Home', href: '#home-id-nav', current: true },
  { name: 'Destinos', href: '#destinos-id-nav', current: false },
  { name: 'Depoimentos', href: '#depoimentos-id-nav', current: false },
  { name: 'Categorias', href: '#categorias-id-nav', current: false },
]

const Nav = () => {
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
          <ModalLogin isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
            {/* Componente de modal */}
          </ModalLogin> 

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
                  <a href="#home-id-nav" onClick={(e) => { e.preventDefault(); smoothScroll('#home-id-nav'); }}>
                    <img
                      className="h-10 w-auto"
                      src={`${process.env.PUBLIC_URL}/img/header/business-logo.png`}
                      alt="Logo"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* Links de navegação */}
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        class={classNames(
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

export default function Header() {
  return (
    <header className="text-white bg-slate-700 bg-fixed bg-cover bg-center rounded-b-2xl pt-20 pb-20 sm:pb-24 mx-0 sm:mx-4 2xl:m-auto max-w-screen-2xl px-8 md:px-16" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/header/bg-header.png)`, }} id="home-id-nav">

      <Nav />

      <section>
        <h1 className="w-1/2 fjalla tracking-normal leading-tight hover:cursor-default max-lg:w-2/3 max-sm:w-full text-3xl sm:text-4xl">
          Oferecemos os melhores pacotes de viagem para suas férias!
        </h1>
        <p className="mt-2 w-1/2 hover:cursor-default max-lg:text-sm max-lg:w-2/3 max-md:text-xs max-sm:hidden">
          A Agência de Viagens oferece serviços personalizados para quem busca
          destinos incríveis. Com nossos pacotes de viagem, você terá uma
          experiência única e inesquecível. Realize seus sonhos de viajar
          conosco!
        </p>
      </section>

      <section className="mt-16 max-lg:mt-8">
        <div className="bg-slate-50 rounded-t-2xl p-3 hover:cursor-pointer inline-block max-lg:p-2 max-sm:block text-center">
          <span className="text-orange-500 font-bold text-lg px-4 border-b-2 border-orange-500 max-md:text-base">
            Destino
          </span>
        </div>

        <div className="bg-slate-50 text-black p-2 pb-4 rounded-b-2xl flex justify-around items-center max-sm:flex-col -mt-2">

          <div className="flex flex-col">
            <label htmlFor="location" className="text-gray-500 text-sm p-3 pb-1 max-lg:text-xs">
              Localização
            </label>
            <select id="destination" name="destination" className="border-none bg-transparent md:mb-0 mb-1 px-2 pt-0 text-sm font-bold max-md:text-xs">
              <option value="destino1">Brasil</option>
              <option value="destino2">Japão</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="passageiros" className="text-gray-500 text-sm p-3 pb-1 max-lg:text-xs">
              Passageiros
            </label>
            <select id="passageiros" name="passageiros" className="border-none bg-transparent md:mb-0 mb-1 px-2 pt-0 text-sm font-bold max-md:text-xs">
              <option value="passageiros1">01 Passageiros</option>
              <option value="passageiros2">02 Passageiros</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="check-in" className="text-gray-500 text-sm p-3 pb-1 max-lg:text-xs">
              Check-in
            </label>
            <select id="check-in" name="check-in" className="border-none bg-transparent md:mb-0 mb-1 px-2 pt-0 text-sm font-bold max-md:text-xs">
              <option value="check-in1">22 Dez 2024</option>
              <option value="check-in2">02 Jan 2025</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="check-out" className="text-gray-500 text-sm p-3 pb-1 max-lg:text-xs">
              Check-out
            </label>
            <select id="check-out" name="check-out" className="border-none bg-transparent md:mb-0 mb-1 px-2 pt-0 text-sm font-bold max-md:text-xs">
              <option value="check-out1">02 Jan 2025</option>
              <option value="check-out2">22 Fev 2025</option>
            </select>
          </div>

          <div>
            <button className="p-3 bg-orange-500 text-white rounded-2xl mt-2 max-lg:p-2 max-md:text-sm">
              Procurar Pacotes
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}
