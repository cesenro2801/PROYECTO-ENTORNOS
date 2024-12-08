import { InsertarCategorias } from '../supabase/crudCategorias';
import { supabase } from "../index";
import Swal from "sweetalert2";

jest.mock("../index", () => ({
  supabase: {
    rpc: jest.fn()
  }
}));

jest.mock("sweetalert2", () => ({
  fire: jest.fn()
}));

describe('InsertarCategorias', () => {
  it('debe mostrar un error con Swal cuando supabase.rpc devuelve un error', async () => {
    const error = { message: 'Error de prueba' };
    supabase.rpc.mockResolvedValue({ error });

    await InsertarCategorias({ descripcion: "Nueva categoria" });

    expect(Swal.fire).toHaveBeenCalledWith({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
      footer: '<a href="">Agregue una nueva descripción</a>',
    });
  });
});