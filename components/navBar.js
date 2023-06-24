import renderToDom from '../utils/renderToDom';
// import orderForm from '../pages/orderForm';

const navbar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <a id="home" role="button" class="navbar-brand" href="#">Yeastie Boys</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#" id="view">View Orders</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="#" id="create">Create an Order</a>
    </li>
    </ul>
    <div id="logout-button"></div>
      </div>
    </div>
  </nav>`;
  renderToDom('#navigation', domString);
};

export default navbar;
