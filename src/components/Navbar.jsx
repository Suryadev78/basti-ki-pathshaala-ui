const Navbar = () => (
    <nav className="bg-white sticky top-0 shadow z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between">
        <h1 className="font-bold text-xl">Basti ki Pathshaala</h1>
        <div className="space-x-6">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#volunteer" className="hover:text-blue-600">Volunteer</a>
        </div>
      </div>
    </nav>
  );
  export default Navbar;
  