import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import getAlunos, {
  saveAluno,
  editAluno,
  deleteAluno,
} from '../requests/alunos';
import { toast } from 'react-toastify';

export default function useAlunos() {
  const queryClient = useQueryClient();

  const { data, isFetching, error } = useQuery(['@alunos'], getAlunos, {
    refetchOnWindowFocus: false,
  });

  const saveAlunoMutate = useMutation(saveAluno, {
    onSuccess: () => {
      toast.success('Aluno incluído com sucesso!');
      queryClient.invalidateQueries(['@alunos']);
    },
    onError: () => {
      toast.error('Erro ao cadastrar aluno.');
    },
  });

  const editAlunoMutate = useMutation(editAluno, {
    onSuccess: () => {
      toast.success('Informações salvas com sucesso!');
      queryClient.invalidateQueries(['@alunos']);
    },
    onError: () => {
      toast.error('Erro ao editar informações.');
    },
  });

  const deleteAlunoMutate = useMutation(deleteAluno, {
    onSuccess: () => {
      toast.success('Aluno excluído com sucesso!');
      queryClient.invalidateQueries(['@alunos']);
    },
    onError: () => {
      toast.error('Erro ao excluir aluno.');
    },
  });

  return {
    alunos: data,
    isFetching,
    error,
    saveAluno: saveAlunoMutate.mutate,
    editAluno: editAlunoMutate.mutate,
    deleteAluno: deleteAlunoMutate.mutate,
  };
}
