import api from "../services/api";

type Products = {
    id: string;
    nome: string;
    valor: string;
    fornecedor: string;
    imagemUrl: string;
    descricao: string;
};


export default async function getProducts() {
    return await api.get<Products[]>('/produtos');
}


export async function createProduct(produtos: Products) {
    return await api.post<Products[]>('/produtos', produtos);
}

export async function editProduct(produtos: Products) {
    return await api.post<Products[]>(`/produtos/${produtos.id}`, produtos);
}

export async function deleteProduct(id) {
    return await api.delete<Products[]>(`/produtos/${id}`);
}