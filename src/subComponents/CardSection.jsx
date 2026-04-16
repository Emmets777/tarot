import React, { useState } from "react";
import "../assets/css/cards.css";
import cardImage from "../assets/imgs/tarotCard.png";

function CardsSection() {
  const [selectedService, setSelectedService] = useState(null);
  const [questions, setQuestions] = useState([]);

  // Dados dos serviços para manter a lógica limpa
  const servicesData = {
    YorN: [
      {
        id: "yn1",
        title: "Uma pergunta",
        price: "R$ 3,00",
        qty: 1,
        type: "Sim ou Não",
      },
      {
        id: "yn3",
        title: "Três perguntas",
        price: "R$ 10,00",
        qty: 3,
        type: "Sim ou Não",
      },
      {
        id: "yn5",
        title: "Cinco perguntas",
        price: "R$ 16,00",
        qty: 5,
        type: "Sim ou Não",
      },
      {
        id: "ynC",
        title: "Jogo completo",
        price: "R$ 20,00",
        qty: 6,
        type: "Sim ou Não",
      },
    ],
    objective: [
      {
        id: "obj1",
        title: "Uma pergunta",
        price: "R$ 4,00",
        qty: 1,
        type: "Objetiva",
      },
      {
        id: "obj3",
        title: "Três pergunta",
        price: "R$ 13,00",
        qty: 3,
        type: "Objetiva",
      },
      {
        id: "obj5",
        title: "Cinco pergunta",
        price: "R$ 20,00",
        qty: 5,
        type: "Objetiva",
      },
      {
        id: "objC",
        title: "Jogo completo",
        price: "R$ 25,00",
        qty: 6,
        type: "Objetiva",
      },
    ],
  };

  const handleSelect = (service) => {
    setSelectedService(service);
    setQuestions(new Array(service.qty).fill(""));
    // Scroll suave para o formulário
    setTimeout(() => {
      document
        .getElementById("checkout-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const sendWhatsApp = () => {
    const phone = "5511985833374";
    const questionsText = questions
      .map((q, i) => `*${i + 1}:* ${q || "Não preenchida"}`)
      .join("\n");

    const message = encodeURIComponent(
      `🔮 *Novo Pedido - Baralho Cigano*\n\n` +
        `*Serviço:* ${selectedService.title} (${selectedService.type})\n` +
        `*Preço:* ${selectedService.price}\n\n` +
        `*Perguntas:*\n${questionsText}`,
    );

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <>
      <section className="services">
        <section className="YorN">
          <h3>Perguntas de sim ou não</h3>
          <div className="cards">
            {servicesData.YorN.map((s) => (
              <div className="card" key={s.id}>
                <img src={cardImage} alt={s.title} />
                <h4>{s.title}</h4>
                <div className="description">
                  <p id="price">
                    Preço: <span>{s.price}</span>
                  </p>
                  <button
                    className="btn-select"
                    onClick={() => handleSelect(s)}
                  >
                    Escolher este
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="objective">
          <h3>Perguntas objetivas</h3>
          <div className="cards">
            {servicesData.objective.map((s) => (
              <div className="card" key={s.id}>
                <img src={cardImage} alt={s.title} />
                <h4>{s.title}</h4>
                <div className="description">
                  <p id="price">
                    Preço: <span>{s.price}</span>
                  </p>
                  <button
                    className="btn-select"
                    onClick={() => handleSelect(s)}
                  >
                    Escolher este
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {selectedService && (
          <div id="checkout-form" className="checkout-area">
            <h3>Finalizando {selectedService.title}</h3>
            <p>Por favor, digite suas perguntas abaixo:</p>

            <div className="inputs-container">
              {questions.map((_, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={
                    i === 5 && selectedService.title === "Jogo completo"
                      ? "Pergunta Bônus!"
                      : `Sua pergunta ${i + 1}`
                  }
                  className="question-input"
                  value={questions[i]}
                  onChange={(e) => {
                    const newQ = [...questions];
                    newQ[i] = e.target.value;
                    setQuestions(newQ);
                  }}
                />
              ))}
            </div>

            <div className="checkout-buttons">
              <button onClick={sendWhatsApp} className="btn-confirm">
                Enviar para o WhatsApp ({selectedService.price})
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="btn-cancel"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default CardsSection;
