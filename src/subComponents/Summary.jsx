import '../assets/css/summary.css'

function Summary() {
  return (
    <>
      <section className="presentation">
        <p>
            Aqui está uma breve explicação de o que é o baralho cigano, quem é o
            povo cigano, como é feita a leitura e mais detalhes de como funciona
            o atendimento
          </p>
        <div className="presentation-text">
          <details>
            <summary>O que é o Baralho Cigano?</summary>
            <p>
              O Baralho Cigano surgiu na Europa do século XIX, inspirado no
              "Jogo da Esperança" alemão e popularizado pela famosa cartomante
              Madame Lenormand. Embora sua estrutura técnica seja europeia, foi
              o povo cigano quem adotou e espalhou essas cartas pelo mundo,
              adaptando os símbolos para refletir situações práticas do dia a
              dia e da natureza.
            </p>
          </details>
          <details>
            <summary>Quem é o Povo Cigano?</summary>
            <p>
              O povo cigano, originário da Índia, é conhecido por sua natureza
              nômade e forte intuição, utilizando a cartomancia como uma
              ferramenta de aconselhamento e sobrevivência. Ao unir a simbologia
              das cartas às suas tradições ancestrais, eles transformaram o
              baralho em um oráculo objetivo, focado em prever caminhos e
              oferecer orientações claras para o cotidiano.
            </p>
          </details>
          <details>
            <summary>como é feita a leitura?</summary>
            <p>
              A leitura do baralho cigano, assim como no tarot e no tarot cigano
              é feito com base na intuição do cartomante, no baralho temos
              algumas formas de se tirar as cartas, temos a leitura de 3 cartas
              que consiste em passado, presente e futuro, temos tambem a leitura
              de 5 cartas que é feita de forma parecida, a leitura de 5 cartas
              por sua vez falará sobre o passado, preesente, futuro, algo oculto
              e uma solução.
            </p>
          </details>
          <details>
            <summary>Como funciona o atendimento?</summary>
            <p>
              O atendimento é feito de forma totalmente online, onde você pode
              escolher a forma de leitura que deseja, a partir disso as
              perguntas devem ser enviada para o meu contato, após isso o jogo
              será feito e as respostas enviadas por mensagem de audio, alem de
              fotos sobre as perguntas feitas, o atendimento é feito de forma
              totalmente personalizada, onde cada resposta é feita de forma
              unica para cada pessoa, e as perguntas podem ser feitas sobre
              qualquer assunto, seja ele amoroso, financeiro, profissional ou
              pessoal.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}

export default Summary;
