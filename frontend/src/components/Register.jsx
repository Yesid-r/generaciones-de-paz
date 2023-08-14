import React, { useState } from 'react'
import register from '../assets/register.avif'
const Register = () => {


  const [alert, setAlert] = useState(null);
  const [data, setData] = useState({});


  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <section class="bg-white min-h-screen flex items-center justify-center">

      <div class=" flex border rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div class="md:block hidden w-1/2">
          <img class="rounded-2xl" src={register} />
        </div>
        <div class="md:w-1/2 px-8 md:px-16 ">
          {alert && (
            <div
              className={`${data.success
                ? 'bg-green-100 border-t border-b border-green-500 text-green-700'
                : 'bg-red-100 border-t border-b border-red-500 text-red-700'
                } px-4 py-3`}
              role="alert"
            >
              <p className="font-bold">{data.success ? 'Success' : 'Error'}</p>
              <p className="text-sm">{alert}</p>
            </div>
          )}
          <h2 class="font-bold text-2xl text-teal-700">Registrar</h2>


          <form action="" class="flex mt-3 flex-col gap-4">
            <input class="p-2  rounded-xl border" type="text" name="firstname" placeholder="Nombre"  required/>
            <input class="p-2  rounded-xl border" type="text" name="lastname" placeholder="Apellido" required/>
            <input class="p-2  rounded-xl border" type="text" name="username" placeholder="Usuario" required/>
            <input class="p-2  rounded-xl border" type="email" name="email" placeholder="Email" required/>

            <div class="relative">
              <input class="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password" required />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>

            <button class="bg-teal-700 rounded-xl text-white py-2 hover:scale-105 duration-300" onClick={handleSubmit}>Registrar</button>
          </form>
        </div>



      </div>
    </section>
  )
}

export default Register