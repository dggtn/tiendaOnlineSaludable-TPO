import React from "react";

export default function ModalConfirmacion({ open, onClose, onConfirm, mensaje }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h3 className="text-lg font-semibold mb-4 text-lime-900">Confirmar acción</h3>
        <p className="mb-6 text-gray-700">{mensaje}</p>
        <div className="flex justify-end gap-2">
          <button
                   className="  text-brown-200 font-extrabold  rounded-lg text-base px-5 py-2.5 mr-2 mb-2 bg-green-600 hover:text-green-700 "

            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
            onClick={onConfirm}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
