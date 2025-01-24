function App() {
  return (
    <div className="flex justify-center">
      <div className="m-3 h-32 w-md rounded-2xl bg-primary p-2">
        <div className="grid grid-cols-3 w-full content-center">
          <div className="flex justify-center">
            {/* name */}
            {/* score */}
            <button className="p-1 h-fit px-5 rounded-xl bg-[#a1c9a5]">Gol</button>
          </div>
          <div className="flex justify-center">-</div>
          <div className="flex justify-center">
          <button className="p-4 px-5 rounded-xl bg-[#a1c9a5]">Gol</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
