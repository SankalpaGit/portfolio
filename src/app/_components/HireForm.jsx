const HireForm = ({ onClose }) => {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-md w-11/12 md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Hire Me</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2 font-bold">Your Full Name</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold">Email</label>
              <input type="email" className="w-full p-2 border rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold">Looking for</label>
              <select className="w-full p-2 border rounded-md">
                <option>Web UI</option>
                <option>Mobile App Design</option>
                <option>React App</option>
                <option>Next.js App</option>
                <option>Django Project</option>
                <option>Node.js Project</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold">Project Description</label>
              <textarea className="w-full p-2 border rounded-md" rows="4"></textarea>
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={onClose} className="mr-2 p-2 border rounded-md">
                Cancel
              </button>
              <button type="submit" className="p-2 w-20 bg-green-600 text-white rounded-md">
                Hire
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default HireForm;
  