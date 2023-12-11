const dados = JSON.parse(localStorage.getItem("dadosProduto"));

dados.forEach((item) => {
  const titulo = item.nome;
  const cor = item.cor;
  const tamanho = item.tamanho;
  const unidade = item.quantidade;

  const conteudo = `<div class="col-12 col-md-6 col-lg-4 d-flex flex-column
  align-items-center">
                      <div class="card mb-3 ms-5 me-5">
                        <div class="card-header d-flex justify-content-start">
                          <span class="fw-bolder fs-4 fst-italic align-self-baseline">Nome:</span><h3 class="titulo-item align-self-baseline">${titulo}
                          </h3>
                        </div>
                        <div class="card-body">
                          <span class="fw-bolder fs-5 fst-italic">Cor:</span><p class="descricao">${cor}</p>
                          <span class="fw-bolder fs-5 fst-italic">Tamanho:</span><p class="descricao">${tamanho}</p>
                          <span class="fw-bolder fs-5 fst-italic">Unidades:</span><p class="descricao">${unidade}</p>
                        </div>
                      </div>  
                    </div>`;

  $("#container-father").append(conteudo);
});
