const converter = (letra, chave) => {
    const alfabeto = "abcdefghijklmnopqrstuvxyz";
    for (let i = 0; i < alfabeto.length; i++) {
        if (letra === alfabeto[i]) {
            return alfabeto[(i + chave) % alfabeto.length];
        }
    }
    return letra;
};

const cifraLetra = (letra, chave) => {
    const alfabeto = "abcdefghijklmnopqrstuvxyz";
    for (let i = 0; i < alfabeto.length; i++) {
        if (letra === alfabeto[i]) {
            return alfabeto[(i + chave) % alfabeto.length];
        }
    }
    return letra;
};

const decifraLetra = (letra, chave) => {
    const alfabeto = "abcdefghijklmnopqrstuvxyz";
    for (let i = 0; i < alfabeto.length; i++) {
        if (letra === alfabeto[i]) {
            return alfabeto[(i - chave + alfabeto.length) % alfabeto.length];
        }
    }
    return letra;
};

const criptografia = (mensagem, callback) => {
    let resultado = '';
    for (let i = 0; i < mensagem.length; i++) {
        resultado += callback(mensagem[i], 3); // Exemplo com chave de 3
    }
    return resultado;
};

module.exports = {converter,cifraLetra,decifraLetra,criptografia};
