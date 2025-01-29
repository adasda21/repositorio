import { clientes } from "../datos/clientes.js";
let clientesDevolver = clientes;
export class Cliente {
    static getAll() {
        return clientesDevolver;
    }
    static getOneBiID(id) {
        return clientesDevolver.find(cliente => cliente.id == id);
    }
    static delete(id) {
        return clientesDevolver.filter(cliente => cliente.id != id);
    }
    static create(cliente) {
        if (!cliente.success) {
            return Error;
        }
        const nuevoCliente = {
            ...cliente.data
        };
        clientesDevolver = [...clientesDevolver, nuevoCliente];
        return nuevoCliente;
    }
    static update(id, cliente) {
        if (!cliente.success) {
            return Error;
        }
        const clienteIndice = clientesDevolver.findIndex(cliente => cliente.id == id);
        if (clienteIndice == -1) {
            return Error;
        }
        const nuevoCliente = {
            ...clientesDevolver[clienteIndice],
            ...cliente.data
        };
        clientesDevolver[clienteIndice] = nuevoCliente;
        return nuevoCliente;
    }
}