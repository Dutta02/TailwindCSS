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
    
            <div className="space-x-4">
              <button className="bg-purple-800 px-3 py-2 rounded-2xl text-white hover:text-slate-900 hover:bg-fuchsia-700">
                Buy Now
              </button>
              <button className="bg-purple-800 px-3 py-2 rounded-2xl text-white hover:text-slate-900 hover:bg-fuchsia-700">
                Contact Us
              </button>
            </div>
          </div>
    </>
  )
}

export default App
