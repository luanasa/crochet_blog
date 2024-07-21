import Item from "../components/Item";
import { useNavigate } from 'react-router-dom';

export default function Decor() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <div className="p-10">
      <div className="flex items-center justify-between">
        <img className="size-50 p-6 ml-56" src="./logo.png" alt="luuas crochet" />

        <ul className="flex gap-6 mr-60">
          <li>
            <a href="#">
              <img className="size-6" src="./instagram.svg" alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="size-6" src="./youtube.svg" alt="YouTube" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="size-6" src="./pinterest.svg" alt="Pinterest" />
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h1 className="text-center text-3xl mb-8">Decor</h1>

        <ul className="flex gap-4 justify-center">
          <Item link="#" imageSrc="./decor.png" altText="decor crochet" />
          <Item link="#" imageSrc="./decor.png" altText="decor crochet" />
          <Item link="#" imageSrc="./decor.png" altText="decor crochet" />
        </ul>

        <div className="flex justify-center mt-4 gap-4">
          <button onClick={handleButtonClick} className="bg-black text-slate-200 rounded-lg p-1.5 hover:opacity-80">
            Voltar as categorias
          </button>
          <img className="size-5 cursor-pointer mt-2" src="./arrow-right.svg" alt="arrow right" />
        </div>
      </div>
    </div>
  );
}
