/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import getProducts, { newProduct, Product, createProduct, updateProduct, deleteProduct } from "../services/fetchProducts";
import { toast } from 'react-toastify';

export default function useProducts() {
    const queryClient = useQueryClient();

    const { data, isFetching, isLoading, error } = useQuery<Product[]>(['@products'], getProducts, {
        refetchOnWindowFocus: false,
    });

    const createProductMutate = useMutation<newProduct[]>( createProduct, {
        onSuccess: () => {
          toast.success('Produto incluído com sucesso!');
          queryClient.invalidateQueries(['@products']);
        },
        onError: () => {
          toast.error('Erro ao cadastrar produto.');
        },
    });

    const updateProductMutate = useMutation<Product[]>(updateProduct, {
        onSuccess: () => {
          toast.success('Edições salvas com sucesso!');
          queryClient.invalidateQueries(['@products']);
        },
        onError: () => {
          toast.error('Erro ao editar informações.');
        },
    });

    const deleteProductMutate = useMutation(deleteProduct, {
        onSuccess: () => {
          toast.success('Produto excluído com sucesso!');
          queryClient.invalidateQueries(['@products']);
        },
        onError: () => {
          toast.error('Erro ao excluir produto.');
        },
    });

      return {
        produtos: data,
        isFetching,
        isLoading,
        error,
        createProduct: createProductMutate.mutate,
        updateProduct: updateProductMutate.mutate,
        deleteProduct: deleteProductMutate.mutate,

      }
}