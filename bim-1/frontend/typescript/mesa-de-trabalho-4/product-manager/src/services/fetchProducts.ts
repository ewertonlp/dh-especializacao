import api from "./api";

export interface Product {
  _id: string;
  nome: string;
  valor: string;
  fornecedor: string;
  imagemUrl: string;
  descricao: string;
}

export interface newProduct {
  nome: string;
  valor: string;
  fornecedor: string;
  imagemUrl: string;
  descricao: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export default async function getProducts(): Promise<Product[]> {
    const response = await api.get<Product[]>("/produtos");
    return response.data;
}

export async function fetchProductsById(_id: string) {
  return await api.get<Product[]>(`/produtos/${_id}`);
}

export async function createProduct(product: newProduct): Promise<newProduct[]> {
  const response = await api.post<newProduct[]>('/produtos/', product);
  return response.data;
}

export async function updateProduct(product: Product): Promise<void> {
  await api.put(`/produtos/${product._id}`, product);
}

export async function deleteProduct(_id: string): Promise<void> {
  await api.delete(`/produtos/${_id}`);
}