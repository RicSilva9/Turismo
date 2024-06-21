export default function Modal__Nav__Header({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <div className="h-screen w-screen bg-black -ml-20 max-sm:-ml-4 bg-opacity-10 flex justify-center items-center">
        <div className="bg-slate-50 max-w-96">
          <div>{children}</div>

          <div className="flex w-full justify-end">
            {/* Vai ser tipo um header */}
            <p
              className="text-black font-bold hover:bg-red-700 py-2 p-3 text-xs inline-block cursor-pointer"
              onClick={setModalOpen}
            >
              X
            </p>
          </div>

          <div className="p-5">
            {' '}
            {/* E esse um body */}
            <h1 className="text-black bg-red-400 p-3 text-sm">
              AVISO! Essa tela de login é para demonstração, não iremos
              armazenar dados colocados a seguir.
            </h1>
            <h2 className="mt-5 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
              Faça login em sua conta
            </h2>
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Endereço de Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Senha
                    </label>
                    <div className="text-sm">
                      <a
                        href="#home-id-nav"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Esqueceu sua senha?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
            <div>
              <p className="text-center text-gray-700 text-sm mt-6 cursor-default">or with</p>
              <div className="flex justify-center gap-5 mt-6">
                <button className="text-black px-3 py-1 border border-black rounded-lg hover:bg-blue-500 hover:text-white hover:border-none hover:font-bold flex items-center gap-1">
                  <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" className="max-h-5 bg-slate-50 rounded-full" alt="logo google" />
                  Google
                </button>
                <button className="text-black px-3 py-1 border border-black rounded-lg hover:bg-black hover:text-white hover:border-none hover:font-bold flex items-center gap-1">
                  <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" className="max-h-5 bg-slate-50 rounded-full" alt="logo github" />
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}
