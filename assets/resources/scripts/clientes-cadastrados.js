const cadastroClientes = JSON.parse(localStorage.getItem("clienteDados"));

cadastroClientes.forEach((item) => {
  const clientNome = item.nome;
  const clientEmail = item.email;
  const cepClient = item.cep;
  const ruaClient = item.rua;
  const bairroClient = item.bairro;
  const cidadeClient = item.cidade;
  const estadoClient = item.estado;

  const content = `<div class="col-12 col-md-6 col-lg-4 d-flex flex-column
  align-items-center">
                      <div class="card mb-3 ms-5 me-5" id="card-clientes">
                        <div class="card-header d-flex justify-content-start" id="card-cabecalho">
                          <span class="fw-bolder fs-4 fst-italic align-self-baseline">Nome:</span><h3 class="titulo-item align-self-baseline">${clientNome}
                          </h3>
                        </div>
                        <div class="card-body">
                          <span class="fw-bolder fs-5 fst-italic">Email:</span><p class="descricao">${clientEmail}</p>
                          <span class="fw-bolder fs-5 fst-italic">CEP:</span><p class="descricao">${cepClient}</p>
                          <span class="fw-bolder fs-5 fst-italic">Rua:</span><p class="descricao">${ruaClient}</p>
                          <span class="fw-bolder fs-5 fst-italic">Bairro:</span><p class="descricao">${bairroClient}</p>
                          <span class="fw-bolder fs-5 fst-italic">Cidade:</span><p class="descricao">${cidadeClient}</p>
                          <span class="fw-bolder fs-5 fst-italic">Estado:</span><p class="descricao">${estadoClient}</p>
                        </div>
                      </div>  
                    </div>`;

  $("#container-cliente").append(content);
});
