const express     = require('express');
const bodyParser  = require('body-parser');
const nedb        = require('nedb-promise');
const cors        = require('cors');

const ValidacaoUtils = require('./validacao-utils');
const MSG_SUCESSO  = "SUCESSO!";

const MSG_TURMA_FORMATO_INVALIDO  = "O formato da turma é inválido!";
const MSG_USUARIO_FORMATO_INVALIDO = "O formato do usuário é inválido!"
const MSG_CARRO_FORMATO_INVALIDO = "O formato do carro é inválido!"
const MSG_SORVETE_FORMATO_INVALIDO = "O formato do sorvete é inválido!"
const MSG_SUCO_FORMATO_INVALIDO = "O formato do suco é inválido!"

const MSG_TURMA_NAO_ENCONTRADO  = "Nenhuma turma foi encontrada!";
const MSG_USUARIO_NAO_ENCONTRADO  = "Nenhum usuário foi encontrado!";
const MSG_CARRO_NAO_ENCONTRADO  = "Nenhum carro foi encontrado!";
const MSG_SORVETE_NAO_ENCONTRADO  = "Nenhum sorvete foi encontrado!";
const MSG_SUCO_NAO_ENCONTRADO  = "Nenhum suco foi encontrado!";

const db = nedb('banco.db');
const app = express();

db.loadDatabase();

app.use(bodyParser.json());
app.use(cors());

/* Turma de uma Faculdade */

// GET ALL
app.get('/turma', (req, res) => {
    db.find({}).then(turma => {
        if(!turma || !turma.length) {
            res.status(404).send(MSG_TURMA_NAO_ENCONTRADO);
            return;
        }
        res.send(turma);
    }).catch(() => res.status(500).end())
});

// GET ONE
app.get('/turma/:id', (req, res) => {
    db.find({ _id: req.params.id }).then(turma => {
        if(!turma || !turma.length) {
            res.status(404).send(MSG_TURMA_NAO_ENCONTRADO);
            return;
        }
        res.send(turma);
    }).catch(() => res.status(500).end())
});

// INSERT
app.post('/turma', (req, res) => {
    if(ValidacaoUtils.isTurmaValida(req.body)) {
        db.insert(ValidacaoUtils.getCamposValidosTurma(req.body)).then(() => {
            res.send(MSG_SUCESSO);
        }).catch(() => res.status(500).end());
    } else {
        res.status(400).send(MSG_TURMA_FORMATO_INVALIDO);
    }
});

// UPDATE
app.put('/turma/:id', (req, res) => {
    if(ValidacaoUtils.isTurmaValida(req.body)) {
        db.update({ _id: req.params.id }, ValidacaoUtils.getCamposValidosTurma(req.body)).then(() => {
            res.send(MSG_SUCESSO);
        }).catch(() => res.status(500).end());
    } else {
        res.status(400).send(MSG_TURMA_FORMATO_INVALIDO);
    }    
});

// DELETE
app.delete('/turma/:id', (req, res) => {
    db.remove({ _id: req.params.id }).then(() => {
        res.send(MSG_SUCESSO);
    }).catch(() => res.status(500).end());
});

/* Cadastrando um Usuário */

// GET ALL
app.get('/usuario', (req, res) => {
    db.find({}).then(usuario => {
        if(!usuario || !usuario.length) {
            res.status(404).send(MSG_USUARIO_NAO_ENCONTRADO);
            return;
        }
        res.send(usuario);
    }).catch(() => res.status(500).end())
});

// GET ONE
app.get('/usuario/:id', (req, res) => {
    db.find({ _id: req.params.id }).then(usuario => {
        if(!usuario || !usuario.length) {
            res.status(404).send(MSG_USUARIO_NAO_ENCONTRADO);
            return;
        }
        res.send(usuario);
    }).catch(() => res.status(500).end())
});

// INSERT
app.post('/usuario', (req, res) => {
    if(ValidacaoUtils.isUsuarioValido(req.body)) {
        db.insert(ValidacaoUtils.getCamposValidosUsuario(req.body)).then(() => {
            res.send(MSG_SUCESSO);
        }).catch(() => res.status(500).end());
    } else {
        res.status(400).send(MSG_USUARIO_FORMATO_INVALIDO);
    }
});

// UPDATE
app.put('/usuario/:id', (req, res) => {
    if(ValidacaoUtils.isUsuarioValido(req.body)) {
        db.update({ _id: req.params.id }, ValidacaoUtils.getCamposValidosUsuario(req.body)).then(() => {
            res.send(MSG_SUCESSO);
        }).catch(() => res.status(500).end());
    } else {
        res.status(400).send(MSG_USUARIO_FORMATO_INVALIDO);
    }    
});

// DELETE
app.delete('/usuario/:id', (req, res) => {
    db.remove({ _id: req.params.id }).then(() => {
        res.send(MSG_SUCESSO);
    }).catch(() => res.status(500).end());
});

/*Cadastrando um Carro*/

// GET ALL
app.get('/carro', (req, res) => {
    db.find({}).then(carro => {
        if(!carro || !carro.length) {
            res.status(404).send(MSG_CARRO_NAO_ENCONTRADO);
            return;
        }
        res.send(carro);
    }).catch(() => res.status(500).end())
});

// GET ONE
app.get('/carro/:id', (req, res) => {
    db.find({ _id: req.params.id }).then(carro => {
        if(!carro || !carro.length) {
            res.status(404).send(MSG_CARRO_NAO_ENCONTRADO);
            return;
        }
        res.send(carro);
    }).catch(() => res.status(500).end())
});

// INSERT
app.post('/carro', (req, res) => {
    if(ValidacaoUtils.isCarroValido(req.body)) {
        db.insert(ValidacaoUtils.getCamposValidosCarro(req.body)).then(() => {
            res.send(MSG_SUCESSO);
        }).catch(() => res.status(500).end());
    } else {
        res.status(400).send(MSG_CARRO_FORMATO_INVALIDO);
    }
});

// UPDATE
app.put('/carro/:id', (req, res) => {
    if(ValidacaoUtils.isCarroValido(req.body)) {
        db.update({ _id: req.params.id }, ValidacaoUtils.getCamposValidosCarro(req.body)).then(() => {
            res.send(MSG_SUCESSO);
        }).catch(() => res.status(500).end());
    } else {
        res.status(400).send(MSG_CARRO_FORMATO_INVALIDO);
    }    
});

// DELETE
app.delete('/carro/:id', (req, res) => {
    db.remove({ _id: req.params.id }).then(() => {
        res.send(MSG_SUCESSO);
    }).catch(() => res.status(500).end());
});

/*Cadastrando Sorvete */

// GET ALL
app.get('/sorvete', (req, res) => {
    db.find({}).then(sorvete => {
        if(!sorvete || !sorvete.length) {
            res.status(404).send(MSG_SORVETE_NAO_ENCONTRADO);
            return;
        }
        res.send(sorvete);
    }).catch(() => res.status(500).end())
});

// GET ONE
app.get('/sorvete/:id', (req, res) => {
    db.find({ _id: req.params.id }).then(sorvete => {
        if(!sorvete || !sorvete.length) {
            res.status(404).send(MSG_SORVETE_NAO_ENCONTRADO);
            return;
        }
        res.send(sorvete);
    }).catch(() => res.status(500).end())
});

// INSERT
app.post('/sorvete', (req, res) => {
    if(ValidacaoUtils.isSorveteValido(req.body)) {
        db.insert(ValidacaoUtils.getCamposValidosSorvete(req.body)).then(() => {
            res.send(MSG_SUCESSO);
        }).catch(() => res.status(500).end());
    } else {
        res.status(400).send(MSG_SORVETE_FORMATO_INVALIDO);
    }
});

// UPDATE
app.put('/sorvete/:id', (req, res) => {
    if(ValidacaoUtils.isSorveteValido(req.body)) {
        db.update({ _id: req.params.id }, ValidacaoUtils.getCamposValidosSorvete(req.body)).then(() => {
            res.send(MSG_SUCESSO);
        }).catch(() => res.status(500).end());
    } else {
        res.status(400).send(MSG_SORVETE_FORMATO_INVALIDO);
    }    
});

// DELETE
app.delete('/sorvete/:id', (req, res) => {
    db.remove({ _id: req.params.id }).then(() => {
        res.send(MSG_SUCESSO);
    }).catch(() => res.status(500).end());
});

/*Cadastrando Suco */

// GET ALL
app.get('/suco', (req, res) => {
    db.find({}).then(suco => {
        if(!suco || !suco.length) {
            res.status(404).send(MSG_SUCO_NAO_ENCONTRADO);
            return;
        }
        res.send(suco);
    }).catch(() => res.status(500).end())
});

// GET ONE
app.get('/suco/:id', (req, res) => {
    db.find({ _id: req.params.id }).then(suco => {
        if(!suco || !suco.length) {
            res.status(404).send(MSG_SUCO_NAO_ENCONTRADO);
            return;
        }
        res.send(suco);
    }).catch(() => res.status(500).end())
});

// INSERT
app.post('/suco', (req, res) => {
    if(ValidacaoUtils.isSucoValido(req.body)) {
        db.insert(ValidacaoUtils.getCamposValidosSuco(req.body)).then(() => {
            res.send(MSG_SUCESSO);
        }).catch(() => res.status(500).end());
    } else {
        res.status(400).send(MSG_SUCO_FORMATO_INVALIDO);
    }
});

// UPDATE
app.put('/suco/:id', (req, res) => {
    if(ValidacaoUtils.isSucoValido(req.body)) {
        db.update({ _id: req.params.id }, ValidacaoUtils.getCamposValidosSuco(req.body)).then(() => {
            res.send(MSG_SUCESSO);
        }).catch(() => res.status(500).end());
    } else {
        res.status(400).send(MSG_SUCO_FORMATO_INVALIDO);
    }    
});

// DELETE
app.delete('/suco/:id', (req, res) => {
    db.remove({ _id: req.params.id }).then(() => {
        res.send(MSG_SUCESSO);
    }).catch(() => res.status(500).end());
});

console.log("Servidor iniciado na porta 8080...")
app.listen(8080, '0.0.0.0');