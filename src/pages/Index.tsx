// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  const randomNumber = Math.floor(Math.random() * 1000);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 color-black">Привет котлет {randomNumber}</h1>
        <p className="text-xl text-gray-600">тут будет отображаться ваш проект</p>
      </div>
    </div>
  );
};

export default Index;
