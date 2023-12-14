import Primeiro from "./components/basic/Primeiro";
import Segundo from "./components/basic/Segundo";
import Card from "./components/layout/Card";
import './App.css';
import Guess from "./components/basic/Guess";

const app = () => {
  return (
    <div className="App">
      <div className="Cards">
        <Card title="Primeiro">
          <Primeiro />
          <Primeiro />
        </Card>
        <Card title="Segundo">
          <Segundo />
          <Segundo />
        </Card>
        <Card title="Guess It" >
          <Guess/>
        </Card>
      </div>
    </div>
  )
}

export default app;