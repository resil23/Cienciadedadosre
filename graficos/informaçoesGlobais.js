const url='https://github.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/blob/Aula01/educacao/educacao-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
}
vizualizarInformacoesGlobais()
