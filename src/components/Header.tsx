function Header() {

  return (
    <div className="bg_blue-custom h-screen">   
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

      <div className="mt-36 p-6 ml-56 flex justify-between mr-60">
        <div>
          <h1 className="text-7xl leading-16 ">Bem vindos ao <br></br> <span className="text-pink-500">meu</span> blog ♡</h1>
          <button className="rounded-2xl bg-slate-50 px-3.5 py-2.5 text-lg font-semibold text-black shadow-sm hover:bg-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-10 w-36 h-12">
            produtos
          </button>
        </div>

        <div>
          <img className="" src="./hero_ghost.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
