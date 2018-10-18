const CAMPOS_VALIDOS_TURMA = ['disciplina', 'nomeProfessor', 'turno', 'numeroTurma', 'matriculados', 'qtdDisponivel'];
const CAMPOS_VALIDOS_USUARIO = ['nome', 'senha', 'telefone', 'email', 'cpf'];
const CAMPOS_VALIDOS_CARRO = ['modelo', 'preco', 'ano'];
const CAMPOS_VALIDOS_SORVETE = ['sabor', 'preco'];
const CAMPOS_VALIDOS_SUCO = ['sabor', 'preco'];

class ValidacaoUtils {

    /*Cadastro Turma de Faculdade */
    isTurmaValida(turma) {
        let valido = true;

        CAMPOS_VALIDOS_TURMA.forEach(campo => {
            if(!turma.hasOwnProperty(campo)) {
                valido = false;
            }
        });

        return valido;
    }

    getCamposValidosTurma(turma) {
        let novo = new Object();

        CAMPOS_VALIDOS_TURMA.forEach(campo => {
            if(turma.hasOwnProperty(campo)) {
                novo[campo] = turma[campo];
            }
        });

        return novo;
    }

    /*Cadastro de Usuário */
    isUsuarioValido(usuario) {
        let valido = true;

        CAMPOS_VALIDOS_USUARIO.forEach(campo => {
            if(!usuario.hasOwnProperty(campo)) {
                valido = false;
            }
        });

        return valido;
    }

    getCamposValidosUsuario(usuario) {
        let novo = new Object();

        CAMPOS_VALIDOS_USUARIO.forEach(campo => {
            if(usuario.hasOwnProperty(campo)) {
                novo[campo] = usuario[campo];
            }
        });

        return novo;
    }

    /*Cadastro de carro */
    isCarroValido(carro) {
        let valido = true;

        CAMPOS_VALIDOS_CARRO.forEach(campo => {
            if(!carro.hasOwnProperty(campo)) {
                valido = false;
            }
        });

        return valido;
    }

    getCamposValidosCarro(carro) {
        let novo = new Object();

        CAMPOS_VALIDOS_CARRO.forEach(campo => {
            if(carro.hasOwnProperty(campo)) {
                novo[campo] = carro[campo];
            }
        });

        return novo;
    }

    /*Cadastro de Sorvete */
    isSorveteValido(sorvete) {
        let valido = true;

        CAMPOS_VALIDOS_SORVETE.forEach(campo => {
            if(!sorvete.hasOwnProperty(campo)) {
                valido = false;
            }
        });

        return valido;
    }

    getCamposValidosSorvete(sorvete) {
        let novo = new Object();

        CAMPOS_VALIDOS_SORVETE.forEach(campo => {
            if(sorvete.hasOwnProperty(campo)) {
                novo[campo] = sorvete[campo];
            }
        });

        return novo;
    }

    /*Cadastro de Suco*/
    isSucoValido(usuario) {
        let valido = true;

        CAMPOS_VALIDOS_SUCO.forEach(campo => {
            if(!suco.hasOwnProperty(campo)) {
                valido = false;
            }
        });

        return valido;
    }

    getCamposValidosSuco(suco) {
        let novo = new Object();

        CAMPOS_VALIDOS_USUARIO.forEach(campo => {
            if(suco.hasOwnProperty(campo)) {
                novo[campo] = suco[campo];
            }
        });

        return novo;
    }

}

module.exports = new ValidacaoUtils();