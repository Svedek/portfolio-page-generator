// Header at the top of the page

function Header(props) {
  const pageTitle = props.pageTitle;
  
  return (
    <header id="page-head">
      <h1>{pageTitle}</h1>
      <h2>Svedek</h2>
    </header>
  )
}

export default Header
