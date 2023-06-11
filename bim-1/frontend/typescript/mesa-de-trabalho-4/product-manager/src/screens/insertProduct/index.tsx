import { useState } from "react";
import InsertProductModal from "../../components/modal/insertProductModal";

const InsertProductScreen = ({isModalOpen, setModalOpen}) => {
    // const [isModalOpen,SetModalOpen] = useState(false);
  return (
    <div>
      <InsertProductModal isModalOpen={isModalOpen} onRequestClose={() => setModalOpen(false)}  >
    <form className="flex flex-col items-center justify-center">
        <h2>Cadastrar Produto</h2>
        <input type="text" placeholder="Nome do Produto" className="w-full bg-gray-200" />
    </form>
      </InsertProductModal>
    </div>
  )
}

export default InsertProductScreen;


