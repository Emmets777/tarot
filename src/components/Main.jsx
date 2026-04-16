import '../assets/css/main.css'
import CardSection from '../subComponents/CardSection';
import Summary from '../subComponents/Summary';

function Main() {
    return (
        <>
            <main>
                <h1>Sejam bem vindos!</h1>

                <h4>
                    Já sentiu que tem algo te incomodando? quer ter respostas para o que te deixa aflito? agora você pode ter respostas para suas perguntas, agende agora uma consulta e tenha as respostas que procura!
                </h4>

                <Summary />
                <CardSection />

            </main>
        </>
    )
}

export default Main