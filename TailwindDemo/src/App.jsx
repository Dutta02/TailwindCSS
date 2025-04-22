import './App.css'

function App() {

  return (
  <>
  <div className="bg-purple-800 text-white flex justify-between">
            <img
              src="/src/assets/download.jpg"
              className="h-12 pt-3 px-3 rounded-2xl"
              alt="wolf"
            />
            <ul className="flex space-x-11 justify-end px-28 py-4">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Catalogue</li>
              <li className="cursor-pointer">Contact Us</li>
            </ul>
          </div>
    
          <div className="bg-fuchsia-100 py-40 pl-9">
            <div className="text-6xl mb-4">The best phones in the town</div>
    
            <p className="py-3 w-1/3 mb-6  bg-blue-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed corrupti
              <br />
              optio cumque animi error. Laudantium nesciunt sed quibusdam harum
              <br />
              sequi iure accusantium tempore
            </p>
            <p className='bg-purple-500 sm:bg-yellow-300 lg:font-black lg:text-5xl  font-bold text-8xl px-52 my-20'>alla lla la alllaa oie oie alla llla lalla oie oie</p>
    
            <div className="space-x-4">
              <button className="btn">
                Buy Now
              </button>
              <button className="btn">
                Contact Us
              </button>
            </div>
          </div>
    </>
  )
}

export default App
