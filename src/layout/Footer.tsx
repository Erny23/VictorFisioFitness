import { Banner } from "flowbite-react"

const Footer = () => {
  return (
    <>
        <footer className="bg-gray-200 pt-2">
            <Banner>
              <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4">
                <div className="mx-auto flex items-center">
                  <p className="flex items-center text-sm font-normal text-gray-500">
                    <span className="[&_p]:inline">
                      Desarrollado por Ernesto Fava y Gilberto Ojeda&nbsp;
                      <a href="#" className="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline">
                        Github
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </Banner>
        </footer>
    </>
  )
}

export default Footer