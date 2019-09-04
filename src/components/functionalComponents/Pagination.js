import React from 'react'

const Pagination = (props) => {
  const pageLinks = [];
  
  for(let i = 1; i <= props.pages; i++) {
    let active = props.curPage == i ? 'active' : '';
    pageLinks.push(
      <li className={`waves-effect ${active}`} key={i} onClick={() => props.paginate(i)}>
        <a href="#">{i}</a>
      </li>
    )
  }

  return (
    <ul className='center pagination'>
      { pageLinks }
    </ul>
  )
}

export default Pagination;