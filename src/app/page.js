import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1> Hi There!</h1>
      <p>Click the button bellow to login!</p>
      <button type="button" className="btn btn-primary">
        Sign In
      </button>
    </div>
  );
}

export default Home;
