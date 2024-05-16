import './App.css';

const src = 'https://firebasestorage.googleapis.com/v0/b/car-rental-feb08.appspot.com/o/Cars%2FDelete.png?alt=media&token=6ce928e8-042c-4e54-93c8-afefc3a0129e';

function App() {
  return (
    <main>
      <section className='container'>
        <div className='person'>
          <img src={src} style={{ height: 100, width: 100, borderRadius: 0 }} alt="Sup" />
          <div style={{alignItems: 'center', justifyContent: 'center'}}>
            <h3>Lorem Ipsum</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
