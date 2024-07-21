import Item from "../components/Item";

export default function Amigurumi() {
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
        <h1 className="text-center text-3xl mb-8">Amigurumi</h1>

        <ul className="flex gap-4 justify-center">
          <Item link="#" imageSrc="./amigurumi.png" altText="amigurumi crochet" />
          <Item link="#" imageSrc="./amigurumi.png" altText="amigurumi crochet" />
          <Item link="#" imageSrc="./amigurumi.png" altText="amigurumi crochet" />
        </ul>

        <div className="flex justify-center mt-4">
          <img className="size-5 cursor-pointer" src="./arrow-right.svg" alt="arrow right" />
        </div>
      </div>
    </div>
  );
}
