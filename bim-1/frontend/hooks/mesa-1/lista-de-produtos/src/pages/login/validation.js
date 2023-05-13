function Validation(values) {
  const errors = {};

  if (!values.email) {
    errors.email = '* - Preencha o campo Email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = '* - Formato de email inválido';
  }

  if (!values.password) {
    errors.password = '* - Preencha o campo Password';
  } else if (values.password.length < 6) {
    errors.password = '* - Senha precisa ter no mínimo 6 caracteres';
  }

  return errors;
}

export default Validation;
