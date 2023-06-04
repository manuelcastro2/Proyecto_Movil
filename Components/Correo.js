export default class Correo {
  static correoUsuario = '';

  static guardarCorreo(correo) {
    Correo.correoUsuario = correo;
  }

  static obtenerCorreo() {
    return Correo.correoUsuario;
  }
}