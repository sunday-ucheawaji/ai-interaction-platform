// import ChatBot from "./components/chat/ChatBot";
import ReviewList from "./components/reviews/ReviewList";

function App() {
  return (
    <div className="p-4 h-screen">
      {/* review summarizer */}
      <ReviewList productId={5} /> 
      
      {/* Interactive chat for an imaginary Park called WonderWorld */}
      {/* <ChatBot /> */}
    </div>
  );
}

export default App;
