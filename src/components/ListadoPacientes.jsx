import usePacientes from "../hooks/usePacientes"
import Paciente from "./Paciente"

const ListadoPacientes = () => {

  const {pacientes} = usePacientes()

  return (
    <>
      {pacientes.length ? 
      (
        <>
          <h1 className="font-black text-3xl text-center">Listado pacientes</h1>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''} <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map(paciente => (
            <Paciente 
              key={paciente._id}
              paciente={paciente}
            />
          ))}

        </>
      ) : 
      (
        <>
          <h1 className="font-black text-3xl text-center">No hay pacientes</h1>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''} <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
          </p>
        </>
      )}
    </>
  )
}

export default ListadoPacientes
