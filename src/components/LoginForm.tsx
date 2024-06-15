import React, { useRef } from "react"
import { Button } from "flowbite-react"

const LoginForm:React.FC = () => {

    const form = useRef(null);

    return(<form ref={form} action="/api/user" method="POST">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                <input type="text" name="nombre" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />
            </div>
            <div>
                <label htmlFor="sexo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexo</label>
                <input type="text" name="sexo" id="sexo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Femenino" required />
            </div>  
            <div>
                <label htmlFor="fecha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de Nacimiento</label>
                <input type="date" name="fecha" id="fecha" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="11/05/1989" pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}" required />
            </div>
            <div>
                <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero de Teléfono</label>
                <input type="tel" name="telefono" id="telefono" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0424-0000000" pattern="[0-9]{4}-[0-9]{7}" required />
            </div>
            <div>
                <label htmlFor="peso" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Peso (kg)</label>
                <input type="number" name="peso" id="peso" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="68" required />
            </div>
            <div>
                <label htmlFor="altura" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Altura (m)</label>
                <input type="number" name="altura" id="altura" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1.70" required />
            </div>
        </div>
        <div className="mb-6">
            <label htmlFor="correo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo Electronico</label>
            <input type="email" name="correo" id="correo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
        </div> 
        <div className="mb-6">
            <label htmlFor="contra" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
            <input type="password" name="contra" id="contra" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div> 
        <div className="mb-6">
            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar Contraseña</label>
            <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div> 
        <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
            <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Acepto los <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">términos y condiciones</a>.</label>
        </div>
        <div className="w-full flex justify-center">
          <Button type="submit" className="text-white bg-red-700 w-fit focus:ring-0">Logout</Button>
        </div>
    </form>)
};

export default LoginForm;