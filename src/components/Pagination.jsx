const Pagination = () => {
    return (
        <nav aria-label="Page navigation justify-content-center align-items-center">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="/" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className="page-item"><p className="page-link" href="/">1</p></li>
          <li className="page-item"><a className="page-link" href="7">2</a></li>
          <li className="page-item"><a className="page-link" href="/">3</a></li>
          <li className="page-item">
            <a className="page-link" href="/" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
    )
}

export default Pagination
