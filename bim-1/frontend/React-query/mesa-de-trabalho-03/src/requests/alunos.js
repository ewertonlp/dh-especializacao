import api from '../services/api';

export default async function getAlunos() {
  return (await api.get('/aluno')).data;
}

/**
 * Função para incluir um novo aluno
 * @param {{nome:string, matricula:string, curso:string, bimestre:string}} body
 *
 */
export async function saveAluno(body) {
  return await api.post('/aluno', body);
}

/**
 * Função para editar as informações de um aluno
 * @param {{id:number, nome:string, matricula:string, curso:string, bimestre:string}} body
 * @params {number} id
 */
export async function editAluno(body) {
  return await api.put(`/aluno/${body.id}`, body);
}

/**
 * Função para excluir cadastro de aluno
 * @param {number} id
 */
export async function deleteAluno(id) {
  return await api.delete(`/aluno/${id}`);
}
