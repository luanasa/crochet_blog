import React from 'react';

function Footer() {
  return (
    <div className="bg_pink-custom h-screen">   
      <div className="flex items-center justify-between">
        <img className="size-50 p-6 ml-56" src="./logo.png" alt="luuas crochet" />

        <ul className="flex gap-6 mr-60">
          <li>
            <a href="#">
              <img className="size-6" src="./instagram.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="size-6" src="./youtube.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="size-6" src="./pinterest.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center flex flex-col gap-4 mt-28 items-center">
        <h1 className="text-4xl text-slate-100">Faça a sua encomenda</h1>
        <p className="mb-6">
          Tem algo em mente que não encontrou aqui? <br />
          Não se preocupa, me manda uma mensagem <br />
          que a gente faz acontecer 💗
        </p>
        <div className="flex justify-center w-full">
          <img className="w-auto" src="./cat.png" alt="cat with a flower" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
