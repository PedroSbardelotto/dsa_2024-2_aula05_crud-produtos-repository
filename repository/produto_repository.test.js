const produtoRepository = require("./produto_repository.js")

//Cenário de sucesso
test('Quando inserir o produto arroz, deve retornar e conter na lista o produto com id=1'
    , () => {
        //produto que se espera ser cadastrado (com id)
        const produtoInseridoEsperado = {
            id: 1,
            nome: "Arroz",
            categoria: "alimento",
            preco: 4.00
        };
        //Inserindo o produto no repositorio
        const produtoInserido = produtoRepository.inserir({
            nome: "Arroz",
            categoria: "alimento",
            preco: 4.00
        });
        //Verificando se o produto inserido que retornou está correto
        expect(produtoInserido).toEqual(produtoInseridoEsperado);
        //Verificando se o produto foi inserido no repositório
        expect(produtoRepository.listar()).toContainEqual(produtoInseridoEsperado);
    })